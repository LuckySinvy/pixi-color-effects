//  @ts-ignore
import fragment from "./fragment.frag";
import { Filter } from "pixi.js";

export class Sharpen extends Filter {
  constructor(value: number = 0) {
    super(null, fragment);

    this.value = value;
  }

  get value(): number {
    return this.uniforms.value;
  }
  set value(value: number) {
    let [width, height] = this.uniforms?.filterGlobals?.uniforms?.inputSize ?? [
      1920, 1080,
    ];
    // prettier-ignore
    this.uniforms.m = new Float32Array([
      -1, -1, -1,
      -1, 9, -1,
      -1, -1, -1
    ]);
    this.uniforms.px = [1 / width, 1 / height];
    this.uniforms.value = value / 2;
  }
}
