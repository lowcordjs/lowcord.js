/* eslint-disable @typescript-eslint/ban-types */
export  class Collection<K, V> extends Map {
    public filter(fn: Function): Collection<K, V> { 
        const filtered = new Collection()
        for (const [key, body] of this){
            fn(body) ? filtered.set(key, body) : null
        }
        return filtered
    }

    public map(fn: Function): Collection<K, V> {
        const map_result = new Collection()
        for (const [key, body] of this) {
            map_result.set(key, fn(body));
          }
          return map_result;
    }
}