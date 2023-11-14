import React, { useState, useEffect } from "react";
import { login } from "../redux/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

export default function LoginPage() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const onChangeIdHandler = (e) => {
    setId(e.currentTarget.value);
  };

  const onChangePwHandler = (e) => {
    setPw(e.currentTarget.value);
  };

  const onClickSubmitBtnHandler = (e) => {
    if (id === "") alert("input id");
    if (pw === "") alert("input pw");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let body = {
      id: id,
      pw: pw,
    };

    axios
      .post("http://localhost:3000/user/login", body)
      .then((res) => {
        console.log(res.data);
        if (res.data.code === 400) {
          setMsg("body is empty");
        }
        if (res.data.code === 401) {
          setMsg("id is not existed");
        }
        if (res.data.code === 402) {
          setMsg("pw is not incorrect");
        }
        if (res.data.code === 200) {
          dispatch(login({ id: id, pw: pw }));
          setMsg("");
        }
        setIsLoading(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setMsg("");
        setIsLoading(false);
      }, 1500);
    }
  }, [isLoading]);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <form
          onSubmit={(e) => handleSubmit(e)}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1 style={{ margin: "50px 0px 0px 0px" }}>
            아이디와 비밀번호를 입력해주세요
          </h1>
          <label htmlFor="id">
            <div style={{ margin: "30px 0px" }}>
              아이디
              <div>
                <input
                  type="text"
                  id="id"
                  style={{ width: "500px", height: "30px" }}
                  value={id}
                  onChange={(e) => onChangeIdHandler(e)}
                />
              </div>
            </div>
          </label>
          <label htmlFor="pw">
            <div style={{ margin: "10px 0px" }}>
              비밀번호
              <div>
                <input
                  type="password"
                  id="pw"
                  style={{ width: "500px", height: "30px" }}
                  value={pw}
                  onChange={(e) => onChangePwHandler(e)}
                />
              </div>
            </div>
          </label>
          <input
            type="submit"
            id="pw"
            style={{ width: "500px", height: "30px" }}
            onClick={onClickSubmitBtnHandler}
            disabled={isLoading}
          />
        </form>
      )}
    </div>
  );
}
