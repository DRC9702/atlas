//>>built
define(["dojo/_base/declare","dojo/_base/lang","dojo/has","esri/kernel","esri/lang","esri/symbols/TextSymbol"],function(c,d,f,g,b,e){return c(null,{declaredClass:"esri.layers.LabelClass",labelPlacement:null,labelExpression:null,useCodedValues:null,symbol:null,maxScale:0,minScale:0,where:null,_labelPlacementLookup:{"above-center":"esriServerPointLabelPlacementAboveCenter","above-left":"esriServerPointLabelPlacementAboveLeft","above-right":"esriServerPointLabelPlacementAboveRight","below-center":"esriServerPointLabelPlacementBelowCenter",
"below-left":"esriServerPointLabelPlacementBelowLeft","below-right":"esriServerPointLabelPlacementBelowRight","center-center":"esriServerPointLabelPlacementCenterCenter","center-left":"esriServerPointLabelPlacementCenterLeft","center-right":"esriServerPointLabelPlacementCenterRight","above-after":"esriServerLinePlacementAboveAfter","above-along":"esriServerLinePlacementAboveAlong","above-before":"esriServerLinePlacementAboveBefore","above-start":"esriServerLinePlacementAboveStart","above-end":"esriServerLinePlacementAboveEnd",
"below-after":"esriServerLinePlacementBelowAfter","below-along":"esriServerLinePlacementBelowAlong","below-before":"esriServerLinePlacementBelowBefore","below-start":"esriServerLinePlacementBelowStart","below-end":"esriServerLinePlacementBelowEnd","center-after":"esriServerLinePlacementCenterAfter","center-along":"esriServerLinePlacementCenterAlong","center-before":"esriServerLinePlacementCenterBefore","center-start":"esriServerLinePlacementCenterStart","center-end":"esriServerLinePlacementCenterEnd",
"always-horizontal":"esriServerPolygonPlacementAlwaysHorizontal"},constructor:function(a){a&&(d.mixin(this,a),this.labelPlacement=b.valueOf(this._labelPlacementLookup,a.labelPlacement),a.symbol&&(this.symbol=new e(a.symbol)))},toJson:function(){var a={};a.labelExpression=this.labelExpression;a.useCodedValues=this.useCodedValues;a.maxScale=this.maxScale;a.minScale=this.minScale;a.where=this.where;this._labelPlacementLookup.hasOwnProperty(this.labelPlacement)?a.labelPlacement=this._labelPlacementLookup[this.labelPlacement]:
a.labelPlacement=this.labelPlacement;this.symbol&&(a.symbol=this.symbol.toJson());return b.fixJson(a)}})});