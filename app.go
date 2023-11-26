package main

import (
	"context"
	"fmt"

	"github.com/wailsapp/wails/v2/pkg/runtime"
	"golang.design/x/hotkey"
)

// App struct
type App struct {
	ctx          context.Context
	globalHotKey *hotkey.Hotkey
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}

// 全局快捷键注册
func (a *App) RegisterGlobalHotkey(modifiers []hotkey.Modifier, key hotkey.Key) bool {
	if a.globalHotKey != nil {
		a.globalHotKey.Unregister()
	}
	hk := hotkey.New(modifiers, key)
	err := hk.Register()
	if err != nil {
		runtime.LogInfo(a.ctx, fmt.Sprintf("快捷键注册失败: %v", err))
		return false
	}
	a.globalHotKey = hk
	runtime.LogInfo(a.ctx, fmt.Sprintf("快捷键: %v 已注册", hk))
	isHotKeyRegistered := true
	go func() {
		for range hk.Keydown() {
			if isHotKeyRegistered {
				runtime.WindowHide(a.ctx)
			} else {
				runtime.WindowShow(a.ctx)
			}
			isHotKeyRegistered = !isHotKeyRegistered
		}
	}()
	return true
}
