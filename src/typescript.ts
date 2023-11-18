import { ComponentPath } from "typedoc";

const utilityTypes = new Map([
    ["Awaited", "awaitedtype"],
    ["Partial", "partialtype"],
    ["Required", "requiredtype"],
    ["Readonly", "readonlytype"],
    ["Record", "recordkeys-type"],
    ["Pick", "picktype-keys"],
    ["Omit", "omittype-keys"],
    ["Exclude", "excludeuniontype-excludedmembers"],
    ["Extract", "extracttype-union"],
    ["NonNullable", "nonnullabletype"],
    ["Parameters", "parameterstype"],
    ["ConstructorParameters", "constructorparameterstype"],
    ["ReturnType", "returntypetype"],
    ["InstanceType", "instancetypetype"],
    ["ThisParameterType", "thisparametertypetype"],
    ["OmitThisParameter", "omitthisparametertype"],
    ["ThisType", "thistypetype"],
]);

const templateLiteralTypes = new Map([
    ["Uppercase", "uppercasestringtype"],
    ["Lowercase", "lowercasestringtype"],
    ["Capitalize", "capitalizestringtype"],
    ["Uncapitalize", "uncapitalizestringtype"],
]);

export function resolveTsType(names: ComponentPath[]) {
    if (names.length !== 1) {
        return;
    }
    const name = names[0].path;

    const utilHash = utilityTypes.get(name);
    if (utilHash) {
        return `https://www.typescriptlang.org/docs/handbook/utility-types.html#${utilHash}`;
    }

    const templateHash = templateLiteralTypes.get(name);
    if (templateHash) {
        return `https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#${templateHash}`;
    }
}
