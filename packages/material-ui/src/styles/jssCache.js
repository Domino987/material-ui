// Used https://github.com/thinkloop/multi-key-cache as inspiration

const multiKeyStore = {
  set: (cache, key1, key2, key3, value) => {
    let subCache1 = cache.get(key1);

    if (!subCache1) {
      subCache1 = new Map();
      cache.set(key1, subCache1);
    }

    let subCache2 = subCache1.get(key2);

    if (!subCache2) {
      subCache2 = new Map();
      subCache1.set(key2, subCache2);
    }

    subCache2.set(key3, value);
  },
  get: (cache, key1, key2, key3) => {
    const subCache1 = cache.get(key1);
    if (!subCache1) {
      return undefined;
    }
    const subCache2 = subCache1.get(key2);
    return subCache2 ? subCache2.get(key3) : undefined;
  },
};

const cache = new Map();

export default function jssCache() {
  return {
    onCreateRule: (name, decl, options) => {
      if (!options.parent) {
        return null;
      }

      const cacheKeys = options.sheet.options.cacheKeys;
      const output = multiKeyStore.get(cache, cacheKeys.theme, cacheKeys.stylesCreator, name);

      return output || null;
    },
    onProcessRule(rule, sheet) {
      if (!rule.options.parent || rule.options.sheet.options.link) {
        return;
      }
      console.log('rule', rule)
      const cacheKeys = sheet.options.cacheKeys;

      if (!multiKeyStore.get(cache, cacheKeys.theme, cacheKeys.stylesCreator, rule.key)) {
        multiKeyStore.set(cache, cacheKeys.theme, cacheKeys.stylesCreator, rule.key, rule);
      }
    },
  };
}

// export default function cachePlugin() {
//   const cache = new WeakMap();

//   function onCreateRule(name, decl, { parent }) {
//     return parent ? cache.get(parent.rules.raw[name]) || null : null;
//   }

//   function onProcessRule(rule) {
//     const {
//       options: { sheet, parent },
//     } = rule;

//     if (!parent || (sheet && sheet.options.link)) {
//       return;
//     }

//     const originalStyle = parent.rules.raw[rule.key];

//     if (!cache.get(originalStyle)) cache.set(originalStyle, rule);
//   }

//   return { onCreateRule, onProcessRule };
// }
