export function getInitials(fullName: string) {
  const [lastName, name, middleName] = fullName.trim().split(" ");

  if (!lastName || !name || !middleName) {
    throw new TypeError("invalid `fullName`");
  }

  const [nameFirstLetter, lastNameFirstLetter] = [name[0], lastName[0]];

  if (!nameFirstLetter || !lastNameFirstLetter) {
    throw new TypeError("invalid name or lastName");
  }

  return `${middleName} ${nameFirstLetter.toUpperCase()} ${lastNameFirstLetter.toUpperCase()}`;
}
