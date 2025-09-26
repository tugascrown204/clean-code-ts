// Utility functions

/**
 * Validates if the username meets the criteria.
 * @param userName - The username to validate.
 * @returns boolean - True if valid, false otherwise.
 */
export function isValidUserName(userName: string): boolean {
    const regex = /^[a-zA-Z0-9_]{3,16}$/;
    return regex.test(userName);
}
