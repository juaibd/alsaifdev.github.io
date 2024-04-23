# Toast Notifications



🎉 Toast Notifications allows you to add notifications to your app with ease. No more nonsense!

## Installation from cdn

```
 https://static.staticsave.com/toaster/toast.js
```
## or copy script
```html
  <script src="https://static.staticsave.com/toaster/toast.js"></script>
```
## initialization 



```html
  <script> 
    const toast = new Toast()
    toast.success("toast successfully created!");
  </script>
```

## Features

- Easy to set up for real, you can make it work in less than 10sec!
- Super easy to customize
- Can choose swipe direction
- Super easy to use an animation of your choice. Works well with animate.css for example
- Can display a react component inside the toast!
- Has ```onOpen``` and ```onClose``` hooks. Both can access the props passed to the react component rendered inside the toast
- Can remove a toast programmatically
- Define behavior per toast
- Pause toast when the window loses focus 👁
- Fancy progress bar to display the remaining time
- Possibility to update a toast
- You can control the progress bar
- You can limit the number of toast displayed at the same time
- And much more !

## or copy code

```html
  <script src="https://static.staticsave.com/toaster/toast.js"></script>

  <script> 
    const toast = new Toast()
    toast.success("toast successfully created!");
  </script>
```

## Some Methods

| Methods     | Description |
| ----------- | ----------- |
| success    | toast.success('text here')    |
| warning   | toast.success('text here')    |
| error    | toast.success('text here')    |
| info    | toast.success('text here')    |
| online    | toast.success('text here')    |
| offline    | toast.success('text here')    |
| loading   | toast.success('text here')    |
| downloading   | toast.success('text here')    |
| downloaded   | toast.success('text here')    |
| danger   | toast.danger('text here')    |
| copy    | toast.success('text here')    |
| link   | toast.success('text here')    |
