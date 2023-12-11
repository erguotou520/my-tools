package main

import (
	"context"
	"fmt"

	hook "github.com/robotn/gohook"
	"github.com/wailsapp/wails/v2/pkg/runtime"
)

// App struct
type App struct {
	ctx           context.Context
	globalHotKey  []string
	windowVisible bool
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{
		windowVisible: true,
	}
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
func (a *App) RegisterGlobalHotkey(keys []string) bool {
	if a.globalHotKey != nil {
		hook.End()
	}
	var _keys []string
	_keys = append(_keys, "shift")
	_keys = append(_keys, "shift")
	hook.Register(hook.KeyDown, _keys, func(e hook.Event) {
		a.globalHotKey = keys
		runtime.LogInfo(a.ctx, fmt.Sprintf("快捷键: %v 已注册", keys))
	})

	s := hook.Start()
	<-hook.Process(s)
	return true
}
