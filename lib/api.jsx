const baseUrl = "https://api.bee-you.app/"

async function register(data) {

  let result = await fetch(
    `${baseUrl}company`,
    {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }
  )
  console.log("result:", result)
}

export {
  register
}