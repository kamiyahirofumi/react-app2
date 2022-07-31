// pages/NHK.jsx

import { useState } from "react";
import axios from "axios";

export const NHK = () => {
  const [NHKs, setNHKs] = useState([]);

  const getNHKs = async (keyword) => {
    const url = "https://api.nhk.or.jp/v2/pg/now/{130:東京}/{g1:ＮＨＫ総合１}.json?key={GNAOLXUAmrXuS9K7qiVaoNy7wvaSSyO9}:";
    const result = await axios.get(`${url}${keyword}`);
    console.log(result.data);
    setNHKs(result.data.items ?? []);
  };

  return (
    <>
      <p>キーワードで検索する</p>
      <input type="text" onChange={(e) => getNHKs(e.target.value)} />
      <table>
        <thead>
          <tr>
            <th></th>
            <th>書籍名</th>
            <th>出版社</th>
            <th>出版年</th>
            <th>リンク</th>
          </tr>
        </thead>
        {/* <tbody>
          {books.map((x, i) => (
            <tr key={i}>
              <td>
                <button type="button">選択</button>
              </td>
              <td>{x.volumeInfo.title}</td>
              <td>{x.volumeInfo.publisher}</td>
              <td>{x.volumeInfo.publishedDate}</td>
              <td>
                <a
                  href={x.volumeInfo.infoLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Link
                </a>
              </td>
            </tr>
          ))}
        </tbody> */}
      </table>
    </>
  );
};