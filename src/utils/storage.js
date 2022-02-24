/* BUSCAR STORAGE */
export const getSavedPwd = async (key) => {
  let myPwd = await localStorage.getItem(key)
  let savedPwd = await JSON.parse(myPwd) || []
  return savedPwd
}

/* SAVE STORAGE */
export const saveNewPwd = async (key, newPwd) => {
  let storedPwd = await getSavedPwd(key)

  //*logica para não permitir links duplicados
  const duplicatedPwd = storedPwd.some((pwd) => pwd.pwdText === newPwd.pwdText)

  if (duplicatedPwd) {
    alert('link duplicado')
    return
  }

  //acrescentando um novo valor ao array de senhas
  storedPwd.push(newPwd)
  localStorage.setItem(key, JSON.stringify(storedPwd))
}

export const deletePwd = (pwdList, pwdText) => {

  let myPwd = pwdList.filter(password => password.pwdText !== pwdText)

  localStorage.setItem('@my-passwords', JSON.stringify(myPwd))

  return myPwd
}