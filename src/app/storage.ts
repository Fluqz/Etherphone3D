
export class Storage {

  public static baseName: string = "etherphone";

  public static load(): string {
    return window.localStorage.getItem(Storage.baseName + "-save");
  }

  public static save(file: string) {
    window.localStorage.setItem(Storage.baseName + "-save", file);
  }
}
