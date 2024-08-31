import axios from "axios";

const apiKey = "6222cea0dd4b7a0c9cc4b10485376248";

const client = axios.create({
    baseURL:"https://api.openweathermap.org/data/2.5"
})

export async function fetchData({lat , lon}) {
const {data} =  await client(
    `/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
  );
return data;  
}
