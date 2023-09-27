// const handleLogout = () => {
//     localStorage.removeItem('token');
//     setIsLoggedIn(false);
//   };

// const checkAuthenticated = async () => {
  //   try {
  //     let token = localStorage.getItem("token");
  //     const res = await fetch("http://localhost:3000/api/user", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     const parseRes = await res.json();
  //     console.log(parseRes)
  //     parseRes.updated_at === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
  //     console.log("this ran ")
  //   } catch (err) {
  //     console.error("error");
  //   }
  // };