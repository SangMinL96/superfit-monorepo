const snakeToCamel = (obj: any) => {
  if (Array.isArray(obj)) {
    return obj.map((v) => snakeToCamel(v));
  } else if (obj && typeof obj === "object") {
    return Object.entries(obj).reduce((acc, [key, value]) => {
      const camelKey = key.replace(/_([a-z])/g, (_, c) => c.toUpperCase());
      acc[camelKey] = snakeToCamel(value);
      return acc;
    }, {});
  }
  return obj;
};

export default snakeToCamel;
