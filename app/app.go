package app

import (
	"context"
	"fmt"
	"my-tools/app/hotkey"

	"github.com/wailsapp/wails/v2/pkg/runtime"
)

// App struct
type App struct {
	ctx           context.Context
	globalHotKey  *hotkey.AppHotKey
	windowVisible bool
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{
		windowVisible: true,
		globalHotKey:  nil,
	}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) Startup(ctx context.Context) {
	a.ctx = ctx
	a.globalHotKey = hotkey.NewAppHotKey(func() {
		if a.windowVisible {
			runtime.WindowHide(a.ctx)
		} else {
			runtime.WindowShow(a.ctx)
		}
		a.windowVisible = !a.windowVisible
	})
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}

// 全局快捷键注册
func (a *App) RegisterGlobalHotkey(keys []string) bool {
	return a.globalHotKey.RegisterGlobalHotkey(keys)
}

// 关闭窗口
func (a *App) CloseWindow() {
	runtime.WindowHide(a.ctx)
}
