  <script>
    let icons = {
      success: `
       <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" /></svg>`,
      info: `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-info"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><line x1="12" x2="12" y1="16" y2="12"/><line x1="12" x2="12.01" y1="8" y2="8"/></svg>`,
      warning: `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-triangle-alert"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>`,
      danger: `
      <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" /></svg>`,
      error: `
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" /></svg>
      `,
      loading: `
      <div class="w-5 h-5 spinner"></div>
      `,
      close: `
      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" /></svg>
      `,
      online: `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wifi"><path d="M12 20h.01"/><path d="M2 8.82a15 15 0 0 1 20 0"/><path d="M5 12.859a10 10 0 0 1 14 0"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/></svg>
      `,
      offline: `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wifi-off"><path d="M12 20h.01"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/><path d="M5 12.859a10 10 0 0 1 5.17-2.69"/><path d="M19 12.859a10 10 0 0 0-2.007-1.523"/><path d="M2 8.82a15 15 0 0 1 4.177-2.643"/><path d="M22 8.82a15 15 0 0 0-11.288-3.764"/><path d="m2 2 20 20"/></svg>
      `,
      link: `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
      `,
      navigate: `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-arrow-out-up-right"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/><path d="m21 3-9 9"/><path d="M15 3h6v6"/></svg>
      `,
      copy:`
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-save-all"><path d="M6 4a2 2 0 0 1 2-2h10l4 4v10.2a2 2 0 0 1-2 1.8H8a2 2 0 0 1-2-2Z"/><path d="M10 2v4h6"/><path d="M18 18v-7h-8v7"/><path d="M18 22H4a2 2 0 0 1-2-2V6"/></svg>
      `,
      save:`
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
      `
    }
    let style = document.createElement('style');
    style.innerHTML = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    .close-btn {
    padding: 10px;
    border: none;
    background: white;
    }

    .top-right {
    position: fixed;
    top: 20px;
    right: 10px;
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
    left: 10px;
    }

    .bottom-right {
    position: fixed;
    bottom: 20px;
    right: 10px;
    }

    .bottom-center {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    }

    .bottom-left {
    position: fixed;
    bottom: 20px;
    left: 10px;
    }

    .center-right {
    position: fixed;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    }

    .center-center {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    }

    .center-left {
    position: fixed;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    }


    .toast {
    font-family: 'Poppins', sans-serif;
    position: relative;
    display: flex;
    padding: 0.5rem;
    margin-bottom: 1rem;
    align-items: center;
    border-radius: 0.5rem;
    width: 100%;
    max-width: 20rem;
    color: #6B7280;
    background-color: #ffffff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    }

    .toast .icon-style {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    width: 2rem;
    height: 2rem;

    }

    .toast .title {
    margin-left: 0.75rem;
    font-size: 0.875rem;
    font-weight: 400;
    }

    .progressBar {
    position: absolute;
    bottom: 0;
    left: 0;
    border-bottom-left-radius: 0.375rem;
    width: 100%;
    height: 0.25rem;
    animation: timeOut var(--duration) linear 1 forwards
    }

    @keyframes timeOut {
    to {
    width: 0;
    }
    }

    .icon-style.success {
    color: #10B981;
    background-color: #D1FAE5;
    }
    .icon-style.online {
    color: #10B981;
    background-color: #D1FAE5;
    }
    .icon-style.link {
    color: #10B981;
    background-color: #D1FAE5;
    }
    .icon-style.copy {
    color: #10B981;
    background-color: #D1FAE5;
    }

    .icon-style.error {
    color: #EF4444;
    background-color: #FEE2E2;
    }
    .icon-style.danger {
    color: #EF4444;
    background-color: #FEE2E2;
    }
    .icon-style.offline{
    color: #EF4444;
    background-color: #FEE2E2;
    }
    .icon-style.warning {
    color: rgb(249 115 22);
    background-color: rgb(255 237 213);
    }

    .icon-style.info {
    color: #3B82F6;
    background-color: #DBEAFE;
    }
    .spinner {
    border: 4px solid #C5CAFF;
    border-top-color: #5C69F4;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    }

    @keyframes spin {
      from {
         transform: rotate(0deg);
      }

      to {
         transform: rotate(360deg);
      }
    }

    .progressBar.success {
    background-color: #10B981;
    }
    .progressBar.online {
    background-color: #10B981;
    }
    .progressBar.link {
    background-color: #10B981;
    }
    .progressBar.copy {
    background-color: #10B981;
    }

    .progressBar.error {
    background-color: #EF4444;
    }
    .progressBar.danger {
    background-color: #EF4444;
    }
    .progressBar.offline {
    background-color: #EF4444;
    }

    .progressBar.warning {
    background-color: rgb(249 115 22);
    }

    .progressBar.info {
    background-color: #3B82F6;
    }
    .progressBar.loading {
    background-color: #5C69F4;
    }

    .w-5 {
    width: 20px;
    }

    .h-5 {
    height: 20px;
    }

    .w-3 {
    width: 12px;
    }

    .h-3 {
    height: 12px;
    }
    .ml-4{
    margin-left: 16px;
    }
    
    `;

    document.head.appendChild(style)
    class Toast {
      constructor(option = {}) {
        this.notifications = document.createElement('div');
        this.notifications.classList.add(option.position ? option.position : 'top-right')
        this.notifications.setAttribute('style', `--duration:${(option.duration ? option.duration : 5000) / 1000}s`)
        document.body.appendChild(this.notifications)
        this.createToast = (type, title, callback = null) => {
          let newToast = document.createElement('div');
          newToast.innerHTML = `
          <div class="toast">
            <div class="icon-style ${type}">
              ${icons[type]}
            </div>
            <div class="title">${title}</div>
            ${callback === null && type === 'copy' ? `<button type="button" class="close-btn" onclick="navigator.clipboard.writeText('${title}')">${icons["save"]}</button>`:""}
            
            ${callback === null && type === 'link' ? `<a class="close-btn ${type}" href="${title}">${icons["navigate"]}</a>`:""}
            
            ${callback === null ? (option.closeBtn === undefined || option.closeBtn ? `<button type="button" class="close-btn" onclick="(this.parentElement).remove()">${icons["close"]}</button>`:""): ''}
             ${callback === null ? (option.progress === undefined || option.progress ? `<span class="progressBar ${type}"></span>` : "") : ""}
          </div>
          
          `;
          this.notifications.appendChild(newToast)
          if (callback) {
            callback(newToast)
          } else {
            newToast.timeOut = setTimeout(
              () => newToast.remove(), option.duration ? option.duration : 5000
            )
          }
        }
      }
      success(title = 'Success message', option = {}) {
        let type = 'success';
        this.createToast(type, title);
      }
      error(title = 'Error message', option = {}) {
        let type = 'error';
        this.createToast(type, title);
      }
      warning(title = 'Warning message', option = {}) {
        let type = 'warning';
        this.createToast(type, title);
      }
      info(title = 'Info message', option = {}) {
        let type = 'info';
        this.createToast(type, title);
      }
      danger(title = 'Loading', option = {}) {
        let type = 'danger';
        this.createToast(type, title);
      }
      online(title = 'Loading', option = {}) {
        let type = 'online';
        this.createToast(type, title);
      }
      offline(title = 'Loading', option = {}) {
        let type = 'offline';
        this.createToast(type, title);
      }
      link(title = 'Loading', option = {}) {
        let type = 'link';
        this.createToast(type, title);
      }
      copy(title = 'Loading', option = {}) {
        let type = 'copy';
        this.createToast(type, title);
      }

      loading(title = 'Loading', callback = null) {
        this.createToast('loading', title, callback);
      }
    }
  </script>
