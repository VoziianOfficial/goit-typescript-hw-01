import axios from "axios";

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

//Тип возвращаемого значения Promise<T>:
//Так как функция асинхронная, она возвращает Promise, а внутри этого промиса содержатся данные типа T.
