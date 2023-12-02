import FollowerComponent from "@/components/pages/follower/Follower";
import { useAppDispatch } from "@/hooks/redux";
import { followerActions } from "@/redux/follower";
import { useEffect } from "react";

const Follower = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(followerActions.refresh());
  }, []);

  return <FollowerComponent />;
};

export default Follower;
