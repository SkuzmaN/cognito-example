import { useEffect } from "react";
import { apiClient } from "../client";
import { DashboardLayout } from "../layouts";

const exampleToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE2MjQ0ODA4MTJ9.pF-h2it1B7g1wbNCEFoiwauFYKeektYkEoZQNXpGEIg'

export const DashboardPage = () => {

  useEffect(()=> {
      apiClient(exampleToken).get('user/profile').json().then(console.log).catch(console.error)
  },[])
  return <DashboardLayout title="Welcome to logged area" />;
};
