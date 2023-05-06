export function getPhoneNumberFormat(str: string): string {
    let result = ""
    for (let i = 0; i < 10; i++) {
        result += str.charAt(i)
        if (i === 2 || i == 5) {
            result += "-"
        }
    }
    return result
}