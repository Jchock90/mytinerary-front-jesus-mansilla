import Carousel from "./Carousel/Carousel";
import Content from "./Content/Content";
import { useEffect, useState } from "react";
import axios from "axios";
import apiUrl from "../../../apiUrl";

export default function Body() {
    const [data, setData] = useState([])
    useEffect(
        () => {
            axios(apiUrl + 'cities/carousel')
                .then(res => setData(res.data.data))
                .catch(err => console.log(err))
        },
        []
    )

  return (
    <>
      <div className="justify-between mx-10 mb-6 md:flex-nowrap md:mb-0 lg:flex lg:justify-center">
        <Content/>
        <Carousel data={data}  />
      </div>
    </>
  );
}
