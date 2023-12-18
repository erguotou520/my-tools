package hotkey

import (
	"time"

	hook "github.com/robotn/gohook"
	"golang.org/x/exp/slices"
)

var (
	cmdKeyCode    = hook.Keycode["cmd"]
	rCmdKeyCode   = hook.Keycode["rcmd"]
	altKeyCode    = hook.Keycode["alt"]
	rAltKeyCode   = hook.Keycode["ralt"]
	ctrlKeyCode   = hook.Keycode["ctrl"]
	shiftKeyCode  = hook.Keycode["shift"]
	rShiftKeyCode = hook.Keycode["rshift"]
)

// 只做双击触发
type AppHotKey struct {
	listening         bool
	Enabled           bool
	onActiveGlobalKey func()
	GlobalHotKey      []string
	doubleKey         string
	triggerKeys       []uint16
}

func NewAppHotKey(onActiveGlobalKey func()) *AppHotKey {
	return &AppHotKey{
		listening:         false,
		Enabled:           false,
		GlobalHotKey:      nil,
		onActiveGlobalKey: onActiveGlobalKey,
	}
}

func (h *AppHotKey) parseKey(keys []string) {
	firstKey := keys[0]
	if firstKey == keys[1] {
		if firstKey == "cmd" || firstKey == "shift" || firstKey == "ctrl" || firstKey == "alt" {
			h.doubleKey = firstKey
			if firstKey == "cmd" {
				h.triggerKeys = []uint16{cmdKeyCode, rCmdKeyCode}
			} else if firstKey == "alt" {
				h.triggerKeys = []uint16{altKeyCode, rAltKeyCode}
			} else if firstKey == "shift" {
				h.triggerKeys = []uint16{shiftKeyCode, rShiftKeyCode}
			} else if firstKey == "ctrl" {
				h.triggerKeys = []uint16{ctrlKeyCode}
			}
		}
	}
}

func (h *AppHotKey) startKeyListen() {
	h.listening = true
	go func() {
		h.listening = true
		s := hook.Start()
		defer hook.End()
		var (
			isPressing             = false
			timer      *time.Timer = nil
		)
		for ev := range s {
			var kCode = ev.Keycode
			if ev.Kind == hook.KeyHold && slices.Contains[[]uint16](h.triggerKeys, kCode) {
				if isPressing {
					if timer != nil {
						timer.Stop()
						timer = nil
					}
					h.onActiveGlobalKey()
					isPressing = false
				} else {
					isPressing = true
					timer = time.AfterFunc(300*time.Millisecond, func() {
						isPressing = false
					})
				}
			} else {
				if ev.Kind != hook.KeyUp && isPressing {
					isPressing = false
					if timer != nil {
						timer.Stop()
						timer = nil
					}
				}
			}
		}
	}()
}

func (h *AppHotKey) RegisterGlobalHotkey(keys []string) bool {
	if len(keys) < 2 {
		return false
	}

	h.parseKey(keys)
	h.GlobalHotKey = keys
	if !h.listening {
		h.startKeyListen()
	}
	return true
}
