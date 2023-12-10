let link = document.createElement('link');
link.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css');
link.setAttribute('rel', 'stylesheet');
let style = document.createElement('style');
style.innerHTML = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

    body {
      font-family: 'Poppins', sans-serif;
      margin: 0;
      padding:0;
      box-sizing:border-box;
    }

    button {
      padding: 10px;
    }

    .top-right {
      position: fixed;
      top: 20px;
      right: 5px;
    }
    .top-center {
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
    }
   .top-left {
      position: fixed;
      top: 20px;
      left: 5px;
    }
        .bottom-right {
            position: fixed;
            bottom: 20px;
            right: 5px;
          }
          .bottom-center {
            position: fixed;
            bottom: 20px;
            left: 50% ;
            transform: translateX(-50%);
          }
          .bottom-left {
            position: fixed;
            bottom: 20px;
            left: 5px;
          }
        .center-right {
            position: fixed;
            top: 50%;
            right: 5px;
            transform: translateY(-50%);
          }
          .center-center {
            position: fixed;
            top: 50%;
            left: 50% ;
            transform: translate(-50%,-50%);
          }
          .center-left {
            position: fixed;
            top: 50%;
            left: 5px;
            transform: translateY(-50%);
          }
    

    .toast {
      position: relative;
      padding: 10px;
      color: #fff;
      margin-bottom: 10px;
      width: 400px;
      display: grid;
      grid-template-columns: 70px 1fr 70px;
      border-radius: 5px;
      --color: #0abf30;
      background-image:
        linear-gradient(to right, #0abf3055, #22242f 30%);
      animation: show 0.3s ease 1 forwards
    }

    .toast i {
      color: var(--color);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: x-large;
    }

    .toast .title {
      font-size: 15px;
      font-weight: bold;
    }

    .toast span,
    .toast i:nth-child(3) {
      color: #fff;
      opacity: 0.6;
    }

    @keyframes show {
      0% {
        transform: translateX(100%);
      }

      40% {
        transform: translateX(-5%);
      }

      80% {
        transform: translateX(0%);
      }

      100% {
        transform: translateX(-0%);
      }
    }

    .toast.progress::before {
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: var(--color);
      width: 100%;
      height: 3px;
      content: '';
      box-shadow: 0 0 10px var(--color);
      animation: timeOut var(--duration) linear 1 forwards
    }

    @keyframes timeOut {
      to {
        width: 0;
      }
    }

    .toast.error {
      --color: #f24d4c;
      background-image:
        linear-gradient(to right, #f24d4c55, #22242F 30%);
    }

    .toast.warning {
      --color: #e9bd0c;
      background-image:
        linear-gradient(to right, #e9bd0c55, #22242F 30%);
    }

    .toast.info {
      --color: #3498db;
      background-image:
        linear-gradient(to right, #3498db55, #22242F 30%);
    }
  `;
document.head.appendChild(link)
document.head.appendChild(style)
class Toast {
  constructor(option = {}) {
    this.notifications = document.createElement('div');
    this.notifications.classList.add(option.position ? option.position : 'top-right')
    this.notifications.setAttribute('style',`--duration:${(option.autoClose ? option.autoClose : 5000) / 1000}s`)
    document.body.appendChild(this.notifications)
    this.createToast = (type, icon, title, text) => {
      let newToast = document.createElement('div');
      newToast.innerHTML = `
            <div class="toast ${option.progress && 'progress'} ${type}">
              <i class="${icon}"></i>
              <div class="content">
                <div class="title">${title}</div>
                  <span>${text}</span>
                </div>
              ${option.closeOnClick ? ` <i class="fa-solid fa-xmark" onclick="(this.parentElement).remove()"></i> ` : ''}
            </div>`;
      this.notifications.appendChild(newToast)
      newToast.timeOut = setTimeout(
        () => newToast.remove(), option.autoClose ? option.autoClose : 5000
      )
    }
  }
  success(title = 'Success', option = {}) {
    let type = 'success';
    let icon = option.icon ? option.icon : 'fa-solid fa-circle-check';
    let text = option.discription ? option.discription : 'This is a Success toast.';
    this.createToast(type, icon, title, text);
  }
  error(title = 'Error', option = {}) {
    let type = 'error';
    let icon = option.icon ? option.icon : 'fa-solid fa-circle-exclamation';
    let text = option.discription ? option.discription : 'This is a error toast.';
    this.createToast(type, icon, title, text);
  }
  warning(title = 'Warning', option = {}) {
    let type = 'warning';
    let icon = option.icon ? option.icon : 'fa-solid fa-triangle-exclamation';
    let text = option.discription ? option.discription : 'This is a Warning toast.';
    this.createToast(type, icon, title, text);
  }
  info(title = 'Info', option = {}) {
    let type = 'info';
    let icon = option.icon ? option.icon : 'fa-solid fa-circle-info';
    let text = option.discription ? option.discription : 'This is a Info toast.';
    this.createToast(type, icon, title, text);
  }
  loading(title = 'Loading', option = {}) {
    let type = 'info';
    let icon = option.icon ? option.icon : 'fa-solid fa-spinner fa-spin';
    let text = option.discription ? option.discription : 'This is a Loading toast.';
    this.createToast(type, icon, title, text);
  }
}
