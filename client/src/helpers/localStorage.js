export function setLocalStorageItem (key, value){
    if(window.localStorage){
      window.localStorage.setItem(key, value)
    }
  }
  
  export function getLocalStorageItem (key){
    if(window.localStorage){
      return window.localStorage.getItem(key)
    }
  }
  
  export function removeLocalStorageItem(key) {
    if(window.localStorage){
      return window.localStorage.removeItem(key)
    }
  }