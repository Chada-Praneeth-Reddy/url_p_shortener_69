import React, { useEffect, useState } from "react";
import Service from "../utils/http";
const service = new Service();
import { Avatar, Container, Text ,Stack} from "@mantine/core";
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
      <Container size={"sm"} >
        <Stack
      h={300}
      bg="var(--mantine-color-body)"
      align="center"
      justify="center"
      gap="lg"
    >
      <Avatar src={profileData?.avatar} alt="it's me" style={{height: "100px", width: "100px"}}/>
      <Text size={"lg"}><strong>UserName:  </strong>{profileData?.name}</Text>
      <Text size={"lg"}><strong>Email:     </strong>{profileData?.email}</Text>
      <Text size={"lg"}><strong>Role:</strong>{profileData?.role}</Text>
        </Stack>
      
      </Container>
    </div>
  );
}

export default My;
