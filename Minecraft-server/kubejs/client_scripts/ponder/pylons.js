Ponder.registry((event) => {
    event.create("pylons:harvester_pylon")
    .scene("harvest1", "Using the Harvester Pylon", "farm", (scene, util) => {
        scene.showBasePlate()
        scene.overlay.showText(40).text("The Harvester Pylon").independent(20).placeNearTarget()
        scene.idle(10)
        scene.overlay.showText(40).text("is placed in the water").independent(36).placeNearTarget()
        scene.idle(10)
        scene.overlay.showText(40).text("block for the farm").independent(52).placeNearTarget()
        scene.idle(10)
        scene.world.hideSection([0, 0, 0, 9, 0, 3], Facing.DOWN)
        scene.idle(10)
        scene.showControls(20, [4.5, 1, 4.5], "down")
            .rightClick()
            .withItem("pylons:harvester_pylon")
        scene.idle(10)
        scene.world.modifyBlock([4, 0, 4], () => Block.id("pylons:harvester_pylon").with("waterlogged", "true"), false)
        scene.idle(20)
        scene.addLazyKeyframe()
        scene.overlay.showText(40).text("The Harvester Pylon").independent(20).placeNearTarget()
        scene.idle(10)
        scene.overlay.showText(40).text("needs a hoe in it's").independent(36).placeNearTarget()
        scene.idle(10)
        scene.overlay.showText(40).text("inventory to operate").independent(52).placeNearTarget()
        scene.idle(10)
        scene.showControls(20, [4.5, 1, 4.5], "down")
            .withItem("minecraft:stone_hoe")
        scene.idle(10)
        scene.overlay.showText(40).text("it's durability will be").independent(68).placeNearTarget()
        scene.idle(10)
        scene.overlay.showText(40).text("used during harvesting").independent(84).placeNearTarget()
        scene.idle(30)
        scene.addLazyKeyframe()
        scene.overlay.showText(40).text("The Harvester Pylon").independent(20).placeNearTarget()
        scene.idle(10)
        scene.overlay.showText(40).text("needs storage above it").independent(36).placeNearTarget()
        scene.idle(10)
        scene.overlay.showText(40).text("to place harvested items into").independent(52).placeNearTarget()
        scene.idle(10)
        scene.showControls(20, [4.5, 2, 4.5], "down")
            .rightClick()
            .withItem("minecraft:barrel")
        scene.idle(10)
        scene.world.showSection([4, 1, 4], Facing.down)
        scene.idle(20)
        scene.addLazyKeyframe()
        scene.world.showSection([0, 0, 0, 9, 0, 3], Facing.UP)
        scene.idle(10)
        let threeby = util.select.fromTo(3, 1, 3, 5, 1, 5).substract(util.select.position(4,1,4))
        let fiveby = util.select.fromTo(2, 1, 2, 6, 1, 6).substract(util.select.position(4,1,4))
        let sevenby = util.select.fromTo(1, 1, 1, 7, 1, 7).substract(util.select.position(4,1,4))
        let nineby = util.select.fromTo(0, 1, 0, 8, 1, 8).substract(util.select.position(4,1,4))
        scene.world.setBlocks(nineby, Block.id("minecraft:wheat",{age:"7"}),false)
        scene.world.showSection(nineby, Facing.UP)
        scene.idle(10)
        scene.overlay.showText(60).text("The Harvester Pylon").independent(20).placeNearTarget()
        scene.idle(10)
        scene.overlay.showText(60).text("can be set to harvest").independent(36).placeNearTarget()
        scene.idle(10)
        scene.overlay.showText(60).text("in an area of:").independent(52).placeNearTarget()
        scene.idle(10)
        scene.overlay.showText(20).text("3x3").independent(68).placeNearTarget()
        scene.idle(10)
        scene.overlay.showOutline(PonderPalette.GREEN, "threeby", threeby, 30)
        scene.idle(10)
        scene.world.modifyBlocks(threeby, (curState) => curState.with("age",0), false)
        scene.idle(10)
        scene.overlay.showText(20).text("5x5").independent(68).placeNearTarget()
        scene.idle(10)
        scene.overlay.showOutline(PonderPalette.GREEN, "fiveby", fiveby, 30)
        scene.idle(10)
        scene.world.modifyBlocks(fiveby, (curState) => curState.with("age",0), false)
        scene.idle(10)
        scene.overlay.showText(20).text("7x7").independent(68).placeNearTarget()
        scene.idle(10)
        scene.overlay.showOutline(PonderPalette.GREEN, "sevenby", sevenby, 30)
        scene.idle(10)
        scene.world.modifyBlocks(sevenby, (curState) => curState.with("age",0), false)
        scene.idle(10)
        scene.overlay.showText(20).text("9x9").independent(68).placeNearTarget()
        scene.idle(10)
        scene.overlay.showOutline(PonderPalette.GREEN, "nineby", nineby, 30)
        scene.idle(10)
        scene.world.modifyBlocks(nineby, (curState) => curState.with("age",0), false)
        scene.idle(10)
    })

})