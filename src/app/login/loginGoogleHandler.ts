import { CredentialResponse } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { UserProfileDataInterface } from "../../interfaces/userProfileDataInterface";

export function LoginGoogleHandler(
  response: CredentialResponse
): UserProfileDataInterface {
  const profileResponse = jwtDecode(response.credential!);
  console.log(profileResponse);

  const userData: UserProfileDataInterface =
    profileResponse as UserProfileDataInterface;
  userData.jwt = response.credential;
  sessionStorage.setItem("userData", JSON.stringify(userData));
  return userData;
}