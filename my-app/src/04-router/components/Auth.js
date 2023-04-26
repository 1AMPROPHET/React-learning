import React, { useState, createContext, useContext } from "react";
import { useNavigate, Navigate, useLocation } from 'react-router-dom';

const AuthContext = createContext();

/**
 * 自定义hook，函数返回 Context 值，包括 authed状态、login、logout函数来修改authed状态
 */
export function AuthProvider({children}) {
  const [authed, setAuthed] = useState(false);
  const navigate = useNavigate()
  let location = useLocation()
  let from = location.state?.from?.pathname || "/"

  let login = () => {
    return new Promise(() => {
      setAuthed(true);
      navigate(from, {replace: true})
    });
  }

  let logout = () => {
    return new Promise(() => {
      setAuthed(false);
      navigate('/', {replace: true})
    });
  }

  let value = {authed, login, logout}

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

  // return {
  //   authed,
  //   login() {
  //     return new Promise((res) => {
  //       setAuthed(true);
  //       res();
  //     });
  //   },
  //   logout() {
  //     return new Promise((res) => {
  //       setAuthed(false);
  //       res();
  //     });
  //   }
  // };
}

// 将context值传递给了Context Provider，并返回该组件用于广播context值
// export function AuthProvider({ children }) {
//   const auth = useAuth();

//   return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
// }

// 返回 Context 值
export default function useAuth() {
  return useContext(AuthContext);
}

/**
 * @description
 * 封装拦截组件,如果已登录，返回包括的children组件；
 * 未登录，返回 <Navigate to="/user" /> 组件跳转到登录页面。
 * 
 * @example
 * <RequireAuth>
 *   <ComponentNeedAuth />
 * </RequireAuth>
 */
export function RequireAuth({ children }) {
  const { authed } = useAuth();
  const location = useLocation()
  // const navigate = useNavigate()
  console.log(authed, children)

  if (!authed) {
    return <Navigate to='/login' state={{from: location}} replace/>
  }
  return children
}
