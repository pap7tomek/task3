/*
  Nie zmieniaj tego pliku
 */

const delay = () => new Promise((resolve) => {
  const time = Math.floor((Math.random() * 3) * 1000)
  setTimeout(resolve, time)
})

const simulateError = () => {
  if(Math.random() < 0.2){
    return new Error('Fetch Error')
  }
}

const formApi = {
  getSchema: async () => {
    const response = await fetch('/form.json')
    const responseJson = await response.json()
    await delay()
    simulateError()
    return responseJson
  }
}

export default formApi
