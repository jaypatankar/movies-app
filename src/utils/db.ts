type DBTables = {
  [name: string]: any[];
};

export class DBUtil {
  tables: DBTables = {};

  private static instance: DBUtil;

  public static getInstance(): DBUtil {
    if (!DBUtil.instance) {
      DBUtil.instance = new DBUtil();
    }

    return DBUtil.instance;
  }

  insert(store: string, ...values: any[]) {
    this.tables[store];
    if (!this.tables[store]) {
      this.tables[store] = [...values];
      this.save();
      return;
    }

    this.tables[store] = [...this.tables[store], ...values];
    this.save();
  }

  save() {
    localStorage.setItem("db-store", JSON.stringify(this.tables));
  }

  find(store: string, propName: string, value: any) {
    const all = this.tables[store] || [];

    return all.find((it) => it[propName] === value);
  }

  load() {
    const storeValue = localStorage.getItem("db-store");
    if (!storeValue) return;
    try {
      this.tables = JSON.parse(storeValue);
    } catch (error) {
      console.error(error);
    }
  }
}
