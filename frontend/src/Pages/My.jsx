import React, { useEffect, useState } from "react";
import Service from "../utils/http";
const service = new Service();
import { Avatar, Text } from "@mantine/core";
import axios from "axios";
function My() {
  const [ profileData, setProfileData ] = useState(null);
  async function getProfileData() {
    let data = await service.get("user/me", { withCredentials: true});
    setProfileData(data);
    console.log(data);
  }
  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <div>
      <Avatar src={profileData?.avatar} alt="it's me" />
      <Text>{profileData?.name}</Text>
    </div>
  );
}

export default My;
