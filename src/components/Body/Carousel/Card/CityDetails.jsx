import { useEffect, useState } from "react";
import axios from "axios";
import apiUrl from "../../../../../apiUrl";
import { useParams } from "react-router-dom";
import { Link as Anchor} from 'react-router-dom'

export default function CityDetails() {
    const { id } = useParams()

    const [data, setData] = useState([])

    useEffect(
    () => {
        axios(apiUrl + 'cities/citydetails/' + id)
            .then(res => setData(res.data.response))
            .catch(err => console.log(err))
    },[]
)

  return (
    <>
    {console.log(data)}
      <div className="flex justify-center min-h-screen mb-4">
        <div className="flex flex-col items-center grow justify-center gap-4">
            <h2 className="text-2xl font-semibold">{data.city}</h2>
            <h3 className="text-2xl font-semibold">{data.country}</h3>
            <img src={data.photo} alt={data.city} className="w-2/5 rounded-xl shadow-lg" />
            <p className="text-lg uppercase">
              Under construction
            </p>
            <Anchor to="/cities" className="text-2xl font-semibold bg-indigo-100 rounded-lg p-2">
              Go back
            </Anchor>
        </div>
      </div>
    </>
  );
}