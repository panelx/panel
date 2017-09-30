# PanelX

### The main assumption is to provide web-app that is delivering pure and lightweight view layer for processes on your UNIX (in our case its Raspberry PI). It doesn't matter how it works on your side, just emit WebSocket package with time, data, and some identity - and that's it!

## Package structure
```
{
    String id         // package id, the scriptId + timestamp is probably the most helpful id for debugging
    String scriptId   // id for script, to put right data in right widget
    Number time       // timestamp for data in domain of time
    String data       // and raw data
}
```