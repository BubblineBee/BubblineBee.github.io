(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/// <reference path="../../typescript/typescriptAPI/TypeScriptAPIPlugin.d.ts" />
"use strict";

SupCore.system.registerPlugin("typescriptAPI", "Sup.Model", {
    code: "namespace Sup { export class Model extends Asset {} }",
    defs: "declare namespace Sup { class Model extends Asset { dummyModelMember; } }"
});
SupCore.system.registerPlugin("typescriptAPI", "ModelRenderer", {
    code: "namespace Sup {\n  let materialTypes = [\"basic\", \"phong\", \"shader\"];\n\n  export class ModelRenderer extends Sup.ActorComponent {\n    constructor(actor: Actor, pathOrAsset?: string|Model, materialIndex?: number, shaderPathOrAsset?: string|Shader) {\n      super(actor);\n      this.__inner = new SupEngine.componentClasses.ModelRenderer(this.actor.__inner);\n      if (pathOrAsset != null) this.setModel(pathOrAsset, materialIndex, shaderPathOrAsset);\n      this.__inner.__outer = this;\n      this.actor.modelRenderer = this;\n    }\n    destroy() {\n      this.actor.modelRenderer = null;\n      super.destroy();\n    }\n\n    getModel() { return this.__inner.asset.__outer }\n    setModel(pathOrAsset: string|Model, materialIndex?: number, shaderPathOrAsset?: string|Shader) {\n      let material: string;\n      if (materialIndex != null) material = materialTypes[materialIndex];\n\n      if (material === \"shader\" && shaderPathOrAsset == null) {\n        throw new Error(`Shader asset is missing when setting model on actor named \"${this.actor.getName()}\"`);\n      }\n\n      let modelAsset: Model;\n      if (pathOrAsset != null) {\n        modelAsset = (typeof pathOrAsset === \"string\") ? get(pathOrAsset, Model) : <Model>pathOrAsset;\n        this.__inner.opacity = modelAsset.__inner.opacity;\n      }\n      let shaderAsset: Shader;\n      if (shaderPathOrAsset != null)\n        shaderAsset = (typeof shaderPathOrAsset === \"string\") ? get(shaderPathOrAsset, Shader) : <Shader>shaderPathOrAsset;\n\n      this.__inner.setModel((modelAsset != null) ? modelAsset.__inner : null, material, (shaderAsset != null) ? shaderAsset.__inner : null);\n      return this;\n    }\n    \n    getMaterialType() { return materialTypes.indexOf(this.__inner.materialType); }\n    getShader() { return this.__inner.materialType === \"shader\" ? this.__inner.shaderAsset.__outer : null; }\n    uniforms = new Sup.ShaderUniforms(this);\n\n    getOpacity() { return this.__inner.opacity; }\n    setOpacity(opacity) { this.__inner.setOpacity(opacity); return this; }\n    getColor() { return new Color(this.__inner.color.r, this.__inner.color.g, this.__inner.color.b); }\n    setColor(r, g, b) {\n      if (g == null && b == null) {\n        let color = r;\n        this.__inner.setColor(color.r, color.g, color.b);\n      } else this.__inner.setColor(r, g, b);\n      return this;\n    }\n    getBoneTransform(name) {\n      var data = this.__inner.getBoneTransform(name);\n      if (data != null) {\n        var position = new Math.Vector3(data.position.x, data.position.y, data.position.z);\n        var orientation = new Math.Quaternion(data.orientation.x, data.orientation.y, data.orientation.z, data.orientation.w);\n        var scale = new Math.Vector3(data.scale.x, data.scale.y, data.scale.z);\n\n        return { position, orientation, scale }\n      } else {\n        return null\n      }\n    }\n\n    setAnimation(animationName, looping) { this.__inner.setAnimation(animationName, looping); return this }\n    getAnimation() { return this.__inner.getAnimation() }\n    setAnimationTime(time) { this.__inner.setAnimationTime(time); return this }\n    getAnimationTime() { return this.__inner.getAnimationTime() }\n    getAnimationDuration() { return this.__inner.getAnimationDuration() }\n\n    isAnimationPlaying() { return this.__inner.isAnimationPlaying }\n    playAnimation(looping) { this.__inner.playAnimation(looping); return this }\n    pauseAnimation() { this.__inner.pauseAnimation(); return this }\n    stopAnimation() { this.__inner.stopAnimation(); return this }\n  }\n\n  export namespace ModelRenderer {\n    export enum MaterialType { Basic, Phong, Shader };\n  }\n}\n",
    defs: "declare namespace Sup {\n  class ModelRenderer extends ActorComponent {\n    constructor(actor: Actor, pathOrAsset?: string|Model);\n    constructor(actor: Actor, pathOrAsset: string|Model, materialType?: ModelRenderer.MaterialType, shaderPathOrAsset?: string|Shader);\n\n    getModel(): Model;\n    setModel(pathOrAsset: string|Model): ModelRenderer;\n    setModel(pathOrAsset: string|Model, materialType?: ModelRenderer.MaterialType, shaderPathOrAsset?: string|Shader): ModelRenderer;\n\n    getMaterialType(): ModelRenderer.MaterialType;\n    getShader(): Shader;\n    uniforms: Sup.ShaderUniforms;\n\n    getOpacity(): number;\n    setOpacity(opacity: number): ModelRenderer;\n    getColor(): Color;\n    setColor(color: Color): ModelRenderer;\n    setColor(r: number, g: number, b: number): ModelRenderer;\n    getBoneTransform(name: string): {position: Sup.Math.Vector3; orientation: Sup.Math.Quaternion; scale: Sup.Math.Vector3};\n\n    getAnimation(): string;\n    setAnimation(animationName: string, looping?: boolean): ModelRenderer;\n    setAnimationTime(time: number): ModelRenderer;\n    getAnimationTime(): number;\n    getAnimationDuration(): number;\n\n    isAnimationPlaying(): boolean;\n    playAnimation(looping?: boolean): ModelRenderer;\n    pauseAnimation(): ModelRenderer;\n    stopAnimation(): ModelRenderer;\n  }\n\n  namespace ModelRenderer {\n    enum MaterialType { Basic, Phong, Shader }\n  }\n}\n",
    exposeActorComponent: { propertyName: "modelRenderer", className: "Sup.ModelRenderer" }
});

},{}]},{},[1]);
