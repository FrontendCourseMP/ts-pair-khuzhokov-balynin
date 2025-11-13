export function getInitials(fullName: string) {
    const [lastName, name, middleName] = fullName.trim().split(' ');

    if (!lastName || !name) {
        throw new TypeError('invalid `fullName`');
    }

    const nameFirstLetter = name[0];
    const middleNameFirstLetter = middleName?.[0] || '';

    if (!nameFirstLetter) {
        throw new TypeError('invalid name or lastName');
    }

    const outputMiddlePart = middleNameFirstLetter
        ? middleNameFirstLetter.toUpperCase() + '. '
        : '';

    return `${nameFirstLetter.toUpperCase()}. ${outputMiddlePart}${lastName}`;
}
