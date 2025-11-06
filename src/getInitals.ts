export function getInitials(fullName: string) {
  const [lastName, name, middleName] = fullName.trim().split(" ");

  if (!lastName || !name) {
    throw new TypeError("invalid `fullName`");
  }

  const [nameFirstLetter, middleNameFirstLetter] = [
    name[0],
    middleName?.[0] || "",
  ];

  if (!nameFirstLetter) {
    throw new TypeError("invalid name or lastName");
  }

  return `${nameFirstLetter.toUpperCase()}. ${
    middleNameFirstLetter ? middleNameFirstLetter.toUpperCase() + ". " : ""
  }${lastName}`;
}
