import { Color, ShaderMaterial } from "three";

export class RainbowMaterial {

    static uniforms = {
        time: { value: 0.0 },
        color: { value: new Color(0xffffff) }
      };
    
      static fragmentShader = document.getElementById('rainbowShader').textContent;
    
      createMaterial() {
        return new ShaderMaterial({
          uniforms: RainbowMaterial.uniforms,
          fragmentShader: RainbowMaterial.fragmentShader
        });
      }

}