import AsyncStorage from '@react-native-async-storage/async-storage';

//To save a key-value pair in async storage
export async function saveStringInLocalStorage(key: string, value: string) {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {}
}

//To retrieve a value from a key 
export async function loadStringFromLocalStorage(key: string) {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (e) {
    return null;
  }
}

//To save a key -> object value, pair 
export async function saveObjectInLocalStorage(key: string, value: Object) {
  const jsonValue = JSON.stringify(value);
  return saveStringInLocalStorage(key, jsonValue);
}

//To retrieve the object value from a key
export async function loadObjectFromLocalStorage(key: string) {
  try {
    const jsonValue = await loadStringFromLocalStorage(key);
    if (!jsonValue) {
      return null;
    }
    const objectValue = JSON.parse(jsonValue);
    return objectValue;
  } catch (err) {}
  return null;
}

//To delete a key-value entry permanently
export async function removeFromLocalStorage(key: string) {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {}
}

//To check if a key exists in async-storage
export async function hasKeyinLocalStorage(key: string) {
  try {
    const result = await loadStringFromLocalStorage(key);
    return Boolean(result);
  } catch (e) {}
  return false;
}

//To delete all data in async-storage
export async function wipeAllKeysFromLocalStorage() {
  try {
    await AsyncStorage.clear();
} catch (e) {}}

interface StorageKeys {
  USER_ID:string,
  ACCESS_TOKEN:string,

}
export const StorageKey: StorageKeys = {
  USER_ID: "user_Id",
  ACCESS_TOKEN:"access_token",
};
