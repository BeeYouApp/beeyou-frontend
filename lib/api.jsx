const baseUrl = ' '

async function register(data){

    let result = await fetch(
      `${baseUrl}register`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }
    )
    console.log("result:", result)
  }

  export { 
    register
  }