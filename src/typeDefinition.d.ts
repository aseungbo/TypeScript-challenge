// myPackage의 모듈로 사용하고 싶다면 파일명 수정

interface Config {
  url: string;
}

declare module "myPackage" {
  function init(config: Config): boolean;
  function exit(code: number): number;
}
