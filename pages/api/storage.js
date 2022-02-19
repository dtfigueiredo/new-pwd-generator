export const getSavedPwd = async (key) => {
  let myPwd = localStorage.getItem(key)
  let savedPwd = await JSON.parse(myPwd) || []
  return savedPwd
}

export const saveNewPwd = async (key, newPwd) => {
  let storedPwd = await getSavedPwd(key)

  //não duplicar itens
  const duplicated = storedPwd.some(pwd => pwd.pwdText === newPwd.pwdText)
  if (duplicated) {
    alert('Senha já existe')
    return
  }

  //acrescentando um novo valor ao array de senhas
  storedPwd.push(newPwd)
  localStorage.setItem(key, JSON.stringify(storedPwd))
}

export const deletePwd = async () => {

}