import { Redirect } from "expo-router";

export default function Root() {
  return (
    <Redirect href={'/screens/watchlist/portfolio'}/>
  );
}