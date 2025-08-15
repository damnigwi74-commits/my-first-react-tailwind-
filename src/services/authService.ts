import api from "./api";

export interface LoginPayload {
  username: string;
  password: string;
  login_type: string;
  deviceId: string;
}

export const login = async (payload: LoginPayload) => {
  const requestBody = {
    txntimestamp: new Date().toISOString(),
    xref: "",
    payload,
    channel_details: {
      user_agent_version: "ios",
      deviceId: payload.deviceId,
      host: "127.0.0.1",
      channel_key: "894dbfea79174d4cbe2653842a29e745",
      geolocation: "Nairobi",
      channel: "IPHONE",
      client_id: "LOMANMOBILE",
    },
  };
  const res = await api.post("/mb/kyc/login", requestBody);
  return res.data;
};
