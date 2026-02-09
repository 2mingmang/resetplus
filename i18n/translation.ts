import translations from './translation.json';

type Leaf = string | number | boolean | null;
type TranslationTree = Leaf | TranslationTree[] | { [k: string]: TranslationTree };

function getPath(root: TranslationTree, key: string): TranslationTree | undefined {
  const parts = key.split('.');
  let cur: any = root;
  for (const p of parts) {
    if (cur == null) return undefined;
    cur = cur[p];
  }
  return cur as TranslationTree;
}

export function t(key: string, params?: Record<string, string | number>): string {
  const value = getPath(translations as unknown as TranslationTree, key);
  if (typeof value !== 'string') return key;
  if (!params) return value;
  return value.replace(/\{\{(\w+)\}\}/g, (_m, name: string) =>
    params[name] == null ? '' : String(params[name]),
  );
}

