export const getSavedPwd = async (key) => {
  let myPwd = localStorage.getItem(key)
  let savedPwd = await JSON.parse(myPwd) || []
  return savedPwd
}

export const saveNewPwd = async (key, newPwd) => {
  let storedPwd = await getSavedPwd(key)

  //acrescentando um novo valor ao array de senhas
  storedPwd.push(newPwd)
  localStorage.setItem(key, JSON.stringify(storedPwd))
}

export const deletePwd = async () => {

}