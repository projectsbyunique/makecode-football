namespace SpriteKind {
    export const Field = SpriteKind.create()
    export const Quarterback = SpriteKind.create()
    export const NonPlayerPlayers = SpriteKind.create()
    export const Indicator = SpriteKind.create()
    export const Ball = SpriteKind.create()
    export const Endzone = SpriteKind.create()
    export const Defense = SpriteKind.create()
    export const Offense = SpriteKind.create()
    export const PlayerInEndzone = SpriteKind.create()
    export const PlayerWithPossession = SpriteKind.create()
    export const UI = SpriteKind.create()
    export const Misc = SpriteKind.create()
    export const PlayerPopup = SpriteKind.create()
    export const DefenderTackling = SpriteKind.create()
    export const DefenderThatTackled = SpriteKind.create()
    export const PlayerThatGotTackled = SpriteKind.create()
    export const PlayerThatCaught = SpriteKind.create()
    export const SackedQB = SpriteKind.create()
    export const alertGlare = SpriteKind.create()
    export const Interceptor = SpriteKind.create()
    export const GUI = SpriteKind.create()
}
function start_screen () {
    schedule = []
    scheduleMenuItems = []
    if (!(blockSettings.exists("schedule"))) {
        myMenu = miniMenu.createMenuFromArray([
        miniMenu.createMenuItem("Arizona"),
        miniMenu.createMenuItem("Atlanta"),
        miniMenu.createMenuItem("Baltimore"),
        miniMenu.createMenuItem("Buffalo"),
        miniMenu.createMenuItem("Carolina"),
        miniMenu.createMenuItem("Chicago"),
        miniMenu.createMenuItem("Cincinnati"),
        miniMenu.createMenuItem("Cleveland"),
        miniMenu.createMenuItem("Dallas"),
        miniMenu.createMenuItem("Denver"),
        miniMenu.createMenuItem("Detroit"),
        miniMenu.createMenuItem("Green Bay"),
        miniMenu.createMenuItem("Houston"),
        miniMenu.createMenuItem("Indianapolis"),
        miniMenu.createMenuItem("Jacksonville"),
        miniMenu.createMenuItem("Kansas City"),
        miniMenu.createMenuItem("Las Vegas"),
        miniMenu.createMenuItem("Los Angeles C"),
        miniMenu.createMenuItem("Los Angeles R"),
        miniMenu.createMenuItem("Miami"),
        miniMenu.createMenuItem("Minnesota"),
        miniMenu.createMenuItem("New England"),
        miniMenu.createMenuItem("New Orleans"),
        miniMenu.createMenuItem("New York G"),
        miniMenu.createMenuItem("New York J"),
        miniMenu.createMenuItem("Philadelphia"),
        miniMenu.createMenuItem("Pittsburgh"),
        miniMenu.createMenuItem("San Francisco"),
        miniMenu.createMenuItem("Seattle"),
        miniMenu.createMenuItem("Tampa Bay"),
        miniMenu.createMenuItem("Tennessee"),
        miniMenu.createMenuItem("Washington")
        ])
        myMenu.setDimensions(80, 100)
        myMenu.setTitle("TEAM SELECT")
        myMenu.setFrame(img`
            1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 b 
            1 1 d d d d d d d d 1 b 
            1 d d d d d d d d d d b 
            1 d d d d d d d d d d b 
            1 d d d d d d d d d d b 
            1 d d d d d d d d d d b 
            1 d d d d d d d d d d b 
            1 d d d d d d d d d d b 
            1 b d d d d d d d d b b 
            1 b b b b b b b b b b b 
            b b b b b b b b b b b b 
            `)
        myMenu.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, 13)
        myMenu.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Foreground, 12)
        myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.BackgroundColor, 13)
        myMenu.setPosition(47, 60)
        TeamSelectName = textsprite.create("___", 0, 1)
        teamselectSpritePlayer = sprites.create(assets.image`myImage3`, SpriteKind.GUI)
        star_ratings = sprites.create(assets.image`five_stars`, SpriteKind.GUI)
        TeamSelectName.setPosition(125, 19)
        TeamSelectName.setScale(2, ScaleAnchor.Middle)
        teamselectSpritePlayer.setScale(5, ScaleAnchor.Middle)
        teamselectSpritePlayer.setPosition(125, 65)
        star_ratings.setPosition(125, 104)
        myMenu.onSelectionChanged(function (selection, selectedIndex) {
            music.play(music.createSoundEffect(WaveShape.Sine, 200, 485, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            myMenu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Foreground, 15)
            myMenu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 1)
            TeamSelectName.setText(Teams.getTeamProperty(selectedIndex, Teams.TeamProperty.TeamAbbreviation) as string)
            teamselectSpritePlayer.setImage(assets.image`myImage3`)
            star_ratings.setImage([
            img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,
            assets.image`one_star`,
            assets.image`two_stars`,
            assets.image`three_stars`,
            assets.image`four_stars`,
            assets.image`five_stars`
            ][Teams.getTeamProperty(selectedIndex, Teams.TeamProperty.Rating) as number])
            if (Teams.containsColors(teamselectSpritePlayer.image)) {
                teamselectSpritePlayer.image.replace(9, Teams.getTeamProperty(selectedIndex, Teams.TeamProperty.MainColor) as number)
                teamselectSpritePlayer.image.replace(3, Teams.getTeamProperty(selectedIndex, Teams.TeamProperty.SecondaryColor) as number)
                teamselectSpritePlayer.image.replace(7, Teams.getTeamProperty(selectedIndex, Teams.TeamProperty.SockColor) as number)
            }
        })
        myMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
            music.play(music.createSoundEffect(WaveShape.Square, 440, 445, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            sprites.destroy(myMenu)
            sprites.destroy(star_ratings)
            sprites.destroy(TeamSelectName)
            sprites.destroy(teamselectSpritePlayer)
            myMenu.setButtonEventsEnabled(false)
            blockSettings.writeNumber("selectedTeam", selectedIndex)
            blockSettings.writeNumberArray("record", [0, 0, 0])
            CurrentTeam = blockSettings.readNumber("selectedTeam")
            for (let index = 0; index < 17; index++) {
                let itemLoopIndex = 0
                scheduleAwayTeam = Teams.getAllTeamsEnum()[randint(0, 31)]
                awayOrHome = randint(0, 1)
                if (scheduleAwayTeam == scheduleHomeTeam) {
                    scheduleHomeTeam = Teams.getAllTeamsEnum()[randint(0, 31)]
                }
                if (!(scheduleAwayTeam != spriteutils.nullConsts(spriteutils.NullConsts.Undefined))) {
                    while (!(scheduleAwayTeam != spriteutils.nullConsts(spriteutils.NullConsts.Undefined))) {
                        scheduleAwayTeam = Teams.getAllTeamsEnum()[randint(0, 31)]
                    }
                }
                if (scheduleAwayTeam == blockSettings.readNumber("selectedTeam")) {
                    while (scheduleAwayTeam == blockSettings.readNumber("selectedTeam")) {
                        scheduleAwayTeam = Teams.getAllTeamsEnum()[randint(0, 31)]
                    }
                }
                schedule.push("" + scheduleAwayTeam + "/" + awayOrHome + "/" + "0" + "/" + "0" + "/" + "0")
                scheduleMenuItems.push(miniMenu.createMenuItem("WK" + (itemLoopIndex + 1) + ": " + ("" + ["vs. ", "@ "][awayOrHome] + Teams.getTeamProperty(scheduleAwayTeam, Teams.TeamProperty.TeamLocation))))
            }
            scheduleMenu = miniMenu.createMenuFromArray(scheduleMenuItems)
            scheduleMenu.setDimensions(140, 100)
            scheduleMenu.setFrame(img`
                1 1 1 1 1 1 1 1 1 1 1 1 
                1 1 1 1 1 1 1 1 1 1 1 b 
                1 1 d d d d d d d d 1 b 
                1 d d d d d d d d d d b 
                1 d d d d d d d d d d b 
                1 d d d d d d d d d d b 
                1 d d d d d d d d d d b 
                1 d d d d d d d d d d b 
                1 d d d d d d d d d d b 
                1 b d d d d d d d d b b 
                1 b b b b b b b b b b b 
                b b b b b b b b b b b b 
                `)
            scheduleMenu.setTitle("SCHEDULE")
            scheduleMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.ScrollIndicatorColor, 0)
            scheduleMenu.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, 13)
            scheduleMenu.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Foreground, 12)
            scheduleMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.BackgroundColor, 13)
            scheduleMenu.setPosition(80, 60)
            blockSettings.writeStringArray("schedule", schedule)
            blockSettings.writeNumberArray("record", [0, 0, 0])
            CurrentTeam = blockSettings.readNumber("selectedTeam")
            recordText = fancyText.create("ABC: (0-0-0)")
            fancyText.setText(recordText, "" + Teams.getTeamProperty(CurrentTeam, Teams.TeamProperty.TeamAbbreviation) + ": " + ("(" + blockSettings.readNumberArray("record")[0] + "-" + blockSettings.readNumberArray("record")[1] + "-" + blockSettings.readNumberArray("record")[2] + ")"))
            recordText.setPosition(80, 5)
            console.log(blockSettings.readStringArray("schedule"))
            scheduleMenu.onSelectionChanged(function (selection, selectedIndex) {
                music.play(music.createSoundEffect(WaveShape.Sine, 200, 485, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                // parseFloat(schedule[selectedIndex].split("/")[0]
                scheduleMenu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, Teams.getTeamProperty(parseFloat(schedule[selectedIndex].split("/")[0]), Teams.TeamProperty.MainColor) as number)
                scheduleMenu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Foreground, Teams.getTeamProperty(parseFloat(schedule[selectedIndex].split("/")[0]), Teams.TeamProperty.SecondaryColor) as number)
            })
            scheduleMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
                music.play(music.createSoundEffect(WaveShape.Square, 440, 445, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                spriteutils.moveTo(scheduleMenu, spriteutils.pos(80, 155), 200, false)
                if (parseFloat(schedule[selectedIndex].split("/")[4]) == 0) {
                    if (parseFloat(schedule[selectedIndex].split("/")[1]) == 1) {
                        awayTeamEnum2 = CurrentTeam
                        homeTeamEnum2 = Teams.getTeamFromEnum(parseFloat(schedule[selectedIndex].split("/")[0]));
                    } else {
                        awayTeamEnum2 = Teams.getTeamFromEnum(parseFloat(schedule[selectedIndex].split("/")[0]));
homeTeamEnum2 = CurrentTeam
                    }
                    awayTeamTextSprite = textsprite.create(Teams.getTeamProperty(awayTeamEnum2, Teams.TeamProperty.TeamAbbreviation) as string)
                    homeTeamTextSprite = textsprite.create(Teams.getTeamProperty(homeTeamEnum2, Teams.TeamProperty.TeamAbbreviation) as string)
                    awayTeamTextSprite.z = scheduleMenu.z - 1
                    homeTeamTextSprite.z = scheduleMenu.z - 1
                    awayTeamTextSprite.setPosition(50, 60)
                    homeTeamTextSprite.setPosition(130, 60)
                    fancyText.setText(recordText, "")
                    scheduleMenu.setTitle("Press B to go back")
                    pauseUntil(() => !(controller.anyButton.isPressed()))
                    pauseUntil(() => controller.anyButton.isPressed())
                    if (controller.A.isPressed()) {
                        music.play(music.createSoundEffect(WaveShape.Square, 440, 445, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                        if (parseFloat(schedule[selectedIndex].split("/")[1]) == 1) {
                            timer.background(function () {
                                start_game(CurrentTeam, parseFloat(schedule[selectedIndex].split("/")[0]))
                            })
                            return
                        } else {
                            timer.background(function () {
                                start_game(parseFloat(schedule[selectedIndex].split("/")[0]), CurrentTeam)
                            })
                            return
                        }
                    } else if (controller.B.isPressed()) {
                        music.play(music.createSoundEffect(WaveShape.Square, 440, 445, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                        sprites.destroy(awayTeamTextSprite)
                        sprites.destroy(homeTeamTextSprite)
                        scheduleMenu.setTitle("SCHEDULE")
                        spriteutils.moveTo(scheduleMenu, spriteutils.pos(80, 60), 200, false)
                        fancyText.setText(recordText, "" + Teams.getTeamProperty(CurrentTeam, Teams.TeamProperty.TeamAbbreviation) + ": " + ("(" + blockSettings.readNumberArray("record")[0] + "-" + blockSettings.readNumberArray("record")[1] + "-" + blockSettings.readNumberArray("record")[2] + ")"))
                    }
                } else {
                	
                }
            })
        })
        pauseUntil(() => false)
    } else {
        blockSettings.writeNumberArray("record", [0, 0, 0])
        schedule = blockSettings.readStringArray("schedule") || []
        console.log(schedule)
        CurrentTeam = blockSettings.readNumber("selectedTeam")
        for (let itemLoopIndex2 = 0; itemLoopIndex2 <= schedule.length - 1; itemLoopIndex2++) {
            if (schedule[itemLoopIndex2]) {
                scheduleAwayTeam = parseFloat(schedule[itemLoopIndex2].split("/")[0])
                awayOrHome = parseFloat(schedule[itemLoopIndex2].split("/")[1])
                scheduleGameAwayScore = parseFloat(schedule[itemLoopIndex2].split("/")[2])
                scheduleGameHomeScore = parseFloat(schedule[itemLoopIndex2].split("/")[3])
                if (scheduleGameAwayScore < scheduleGameHomeScore) {
                    if (awayOrHome == 0) {
                        blockSettings.writeNumberArray("record", [blockSettings.readNumberArray("record")[0], blockSettings.readNumberArray("record")[1] + 1, blockSettings.readNumberArray("record")[2]])
                    } else {
                        blockSettings.writeNumberArray("record", [blockSettings.readNumberArray("record")[0] + 1, blockSettings.readNumberArray("record")[1], blockSettings.readNumberArray("record")[2]])
                    }
                } else if (scheduleGameAwayScore > scheduleGameHomeScore) {
                    if (awayOrHome == 0) {
                        blockSettings.writeNumberArray("record", [blockSettings.readNumberArray("record")[0] + 1, blockSettings.readNumberArray("record")[1], blockSettings.readNumberArray("record")[2]])
                    } else {
                        blockSettings.writeNumberArray("record", [blockSettings.readNumberArray("record")[0], blockSettings.readNumberArray("record")[1] + 1, blockSettings.readNumberArray("record")[2]])
                    }
                } else if (scheduleGameAwayScore == scheduleGameHomeScore) {
                    if (parseFloat(schedule[itemLoopIndex2].split("/")[4]) != 0) {
                        blockSettings.writeNumberArray("record", [blockSettings.readNumberArray("record")[0], blockSettings.readNumberArray("record")[1], blockSettings.readNumberArray("record")[2] + 1])
                    }
                }
                if (parseFloat(schedule[itemLoopIndex2].split("/")[4]) == 0) {
                    scheduleMenuItems.push(miniMenu.createMenuItem("WK" + (itemLoopIndex2 + 1) + ": " + ("" + ["vs. ", "@ "][awayOrHome] + Teams.getTeamProperty(scheduleAwayTeam, Teams.TeamProperty.TeamLocation))))
                } else {
                    if (scheduleGameAwayScore < scheduleGameHomeScore) {
                        if (awayOrHome == 0) {
                            scheduleMenuItems.push(miniMenu.createMenuItem("WK" + (itemLoopIndex2 + 1) + ": " + ("" + ["vs. ", "@ "][awayOrHome] + Teams.getTeamProperty(scheduleAwayTeam, Teams.TeamProperty.TeamLocation)) + " (" + scheduleGameAwayScore + "-" + scheduleGameHomeScore + ")", assets.image`lose`))
                        } else {
                            scheduleMenuItems.push(miniMenu.createMenuItem("WK" + (itemLoopIndex2 + 1) + ": " + ("" + ["vs. ", "@ "][awayOrHome] + Teams.getTeamProperty(scheduleAwayTeam, Teams.TeamProperty.TeamLocation)) + " (" + scheduleGameAwayScore + "-" + scheduleGameHomeScore + ")", assets.image`win`))
                        }
                    } else if (scheduleGameAwayScore > scheduleGameHomeScore) {
                        if (awayOrHome == 0) {
                            scheduleMenuItems.push(miniMenu.createMenuItem("WK" + (itemLoopIndex2 + 1) + ": " + ("" + ["vs. ", "@ "][awayOrHome] + Teams.getTeamProperty(scheduleAwayTeam, Teams.TeamProperty.TeamLocation)) + " (" + scheduleGameAwayScore + "-" + scheduleGameHomeScore + ")", assets.image`win`))
                        } else {
                            scheduleMenuItems.push(miniMenu.createMenuItem("WK" + (itemLoopIndex2 + 1) + ": " + ("" + ["vs. ", "@ "][awayOrHome] + Teams.getTeamProperty(scheduleAwayTeam, Teams.TeamProperty.TeamLocation)) + " (" + scheduleGameAwayScore + "-" + scheduleGameHomeScore + ")", assets.image`lose`))
                        }
                    } else if (scheduleGameAwayScore == scheduleGameHomeScore) {
                        scheduleMenuItems.push(miniMenu.createMenuItem("WK" + (itemLoopIndex2 + 1) + ": " + ("" + ["vs. ", "@ "][awayOrHome] + Teams.getTeamProperty(scheduleAwayTeam, Teams.TeamProperty.TeamLocation)) + " (" + scheduleGameAwayScore + "-" + scheduleGameHomeScore + ")", img`
                            . . . . . . 
                            8 8 8 8 8 . 
                            . . 8 . . . 
                            . . 8 . . . 
                            . . 8 . . . 
                            . . . . . . 
                            `))
                    }
                }
            }
        }
        console.log("(" + blockSettings.readNumberArray("record")[0] + "-" + blockSettings.readNumberArray("record")[1] + "-" + blockSettings.readNumberArray("record")[2] + ")")
        recordText = fancyText.create("ABC: (0-0-0)")
        fancyText.setText(recordText, "" + Teams.getTeamProperty(CurrentTeam, Teams.TeamProperty.TeamAbbreviation) + ": " + ("(" + blockSettings.readNumberArray("record")[0] + "-" + blockSettings.readNumberArray("record")[1] + "-" + blockSettings.readNumberArray("record")[2] + ")"))
        recordText.setPosition(80, 5)
        scheduleMenu = miniMenu.createMenuFromArray(scheduleMenuItems)
        scheduleMenu.setDimensions(140, 100)
        scheduleMenu.setFrame(img`
            1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 b 
            1 1 d d d d d d d d 1 b 
            1 d d d d d d d d d d b 
            1 d d d d d d d d d d b 
            1 d d d d d d d d d d b 
            1 d d d d d d d d d d b 
            1 d d d d d d d d d d b 
            1 d d d d d d d d d d b 
            1 b d d d d d d d d b b 
            1 b b b b b b b b b b b 
            b b b b b b b b b b b b 
            `)
        scheduleMenu.setTitle("SCHEDULE")
        scheduleMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.ScrollIndicatorColor, 0)
        scheduleMenu.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, 13)
        scheduleMenu.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Foreground, 12)
        scheduleMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.BackgroundColor, 13)
        scheduleMenu.setPosition(80, 60)
        scheduleMenu.onSelectionChanged(function (selection, selectedIndex) {
            // parseFloat(schedule[selectedIndex].split("/")[0]
            scheduleMenu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, Teams.getTeamProperty(parseFloat(schedule[selectedIndex].split("/")[0]), Teams.TeamProperty.MainColor) as number)
            scheduleMenu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Foreground, Teams.getTeamProperty(parseFloat(schedule[selectedIndex].split("/")[0]), Teams.TeamProperty.SecondaryColor) as number)
        })
        scheduleMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
            spriteutils.moveTo(scheduleMenu, spriteutils.pos(80, 155), 200, false)
            if (parseFloat(schedule[selectedIndex].split("/")[4]) == 0) {
                if (parseFloat(schedule[selectedIndex].split("/")[1]) == 1) {
                    awayTeamEnum2 = CurrentTeam
                    homeTeamEnum2 = Teams.getTeamFromEnum(parseFloat(schedule[selectedIndex].split("/")[0]));
                } else {
                    awayTeamEnum2 = Teams.getTeamFromEnum(parseFloat(schedule[selectedIndex].split("/")[0]));
homeTeamEnum2 = CurrentTeam
                }
                awayTeamTextSprite = textsprite.create(Teams.getTeamProperty(awayTeamEnum2, Teams.TeamProperty.TeamAbbreviation) as string)
                homeTeamTextSprite = textsprite.create(Teams.getTeamProperty(homeTeamEnum2, Teams.TeamProperty.TeamAbbreviation) as string)
                awayTeamTextSprite.z = scheduleMenu.z - 1
                homeTeamTextSprite.z = scheduleMenu.z - 1
                awayTeamTextSprite.setPosition(50, 60)
                homeTeamTextSprite.setPosition(130, 60)
                fancyText.setText(recordText, "")
                scheduleMenu.setTitle("Press B to go back")
                pauseUntil(() => !(controller.anyButton.isPressed()))
                pauseUntil(() => controller.anyButton.isPressed())
                if (controller.A.isPressed()) {
                    if (parseFloat(schedule[selectedIndex].split("/")[1]) == 1) {
                        timer.background(function () {
                            start_game(CurrentTeam, parseFloat(schedule[selectedIndex].split("/")[0]))
                        })
                        return
                    } else {
                        timer.background(function () {
                            start_game(parseFloat(schedule[selectedIndex].split("/")[0]), CurrentTeam)
                        })
                        return
                    }
                } else if (controller.B.isPressed()) {
                    sprites.destroy(awayTeamTextSprite)
                    sprites.destroy(homeTeamTextSprite)
                    scheduleMenu.setTitle("SCHEDULE")
                    spriteutils.moveTo(scheduleMenu, spriteutils.pos(80, 60), 200, false)
                    fancyText.setText(recordText, "" + Teams.getTeamProperty(CurrentTeam, Teams.TeamProperty.TeamAbbreviation) + ": " + ("(" + blockSettings.readNumberArray("record")[0] + "-" + blockSettings.readNumberArray("record")[1] + "-" + blockSettings.readNumberArray("record")[2] + ")"))
                }
            } else {
            	
            }
        })
        pauseUntil(() => false)
    }
}
// 50-30=20
modes.whenModeChanged("preSnap", function (value) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.Defense)
    sprites.destroyAllSpritesOfKind(SpriteKind.Indicator)
    sprites.destroyAllSpritesOfKind(SpriteKind.PlayerWithPossession)
    sprites.destroyAllSpritesOfKind(SpriteKind.DefenderThatTackled)
    sprites.destroyAllSpritesOfKind(SpriteKind.DefenderTackling)
    sprites.destroyAllSpritesOfKind(SpriteKind.PlayerPopup)
    sprites.destroyAllSpritesOfKind(SpriteKind.SackedQB)
    generate_OL()
    generate_DLine()
    draw_lines_at(value, yards_to_x(CurrentFirstDownLineYardage))
    _endzones.setKind(SpriteKind.Endzone)
    playFormationLines = sprites.create(assets.image`play1`, SpriteKind.Indicator)
    playFormationLines.setPosition(running_back.x - playFormationLines.width / 2, _qb.y)
    playFormationLines.z = _field.z + 1
    _play = 0
    _reciever = spriteutils.nullConsts(spriteutils.NullConsts.Null)
    intercepted = false
    endingplay = false
    recieverHasPossesion = false
    enableRecieverMovement = false
    CameraX = _qb.x - 30
    fancyText.setText(Downs, "" + [
    "1st",
    "2nd",
    "3rd",
    "4th"
    ][CurrentDown - 1] + " & " + Math.round(CurrentDownYardage))
    inGameAlert("MENU to Change Play")
    music.play(music.createSoundEffect(WaveShape.Sawtooth, 298, 1, 186, 255, 10, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    if (gameClock <= 0) {
        timer.background(function () {
            modes.setMode("quarterEnd", true)
        })
    }
})
function endPlay (touchdown: boolean) {
    if (!(endingplay)) {
        console.log("Ending play is false, setting it to true.")
        endingplay = true
        for (let value of sprites.allOfKind(SpriteKind.Defense)) {
            value.setVelocity(0, 0)
            value.follow(null, 0)
        }
        for (let value2 of sprites.allOfKind(SpriteKind.Player)) {
            value2.setVelocity(0, 0)
            animation.stopAnimation(animation.AnimationTypes.All, value2)
            value2.setImage(assets.image`myImage3`)
        }
        if (touchdown) {
            inGameAlert("TOUCHDOWN!!")
            timer.after(2500, function () {
                fancyText.setText(ContextText, "")
            })
            soundfx.touchdown()
            _reciever.x += -1
            sprites.destroy(_ball)
            for (let value3 of sprites.allOfKind(SpriteKind.Player)) {
                value3.setVelocity(0, 0)
                value3.follow(null)
                animation.stopAnimation(animation.AnimationTypes.All, value3)
                animation.runImageAnimation(
                value3,
                assets.animation`myAnim1`,
                500,
                true
                )
            }
            for (let value4 of sprites.allOfKind(SpriteKind.Defense)) {
                value4.setVelocity(0, 0)
                animation.stopAnimation(animation.AnimationTypes.All, value4)
                value4.setImage(flip(assets.image`myImage11`))
            }
            timer.after(1000, function () {
                _reciever.setVelocity(0, 0)
                animation.stopAnimation(animation.AnimationTypes.All, _reciever)
                animation.runImageAnimation(
                _reciever,
                assets.animation`myAnim1`,
                500,
                true
                )
            })
            pause(1000)
            return
        } else {
            if (_reciever != spriteutils.nullConsts(spriteutils.NullConsts.Null)) {
                animation.stopAnimation(animation.AnimationTypes.All, _reciever)
            }
            enableRecieverMovement = false
            pause(1000)
            for (let value5 of sprites.allOfKind(SpriteKind.Player)) {
                value5.setVelocity(0, 0)
                animation.stopAnimation(animation.AnimationTypes.All, value5)
                value5.setImage(assets.image`myImage3`)
            }
            if (modes.getCurrentMode() != "sack") {
                pauseUntil(() => _reciever != spriteutils.nullConsts(spriteutils.NullConsts.Undefined) && CurrentScrimYardage != spriteutils.nullConsts(spriteutils.NullConsts.Undefined))
            } else {
                pauseUntil(() => CurrentScrimYardage != spriteutils.nullConsts(spriteutils.NullConsts.Undefined))
            }
            if (_reciever != spriteutils.nullConsts(spriteutils.NullConsts.Null)) {
                console.log("Receiver not null")
                if (_reciever.x > yards_to_x(CurrentScrimYardage)) {
                    console.log("Loss of yards")
                    if (CurrentDown < 4) {
                        CurrentDown += 1
                        CurrentScrimYardage = x_to_yards(_reciever.x)
                        CurrentDownYardage = CurrentScrimYardage - CurrentFirstDownLineYardage
                    } else {
                        end_possession(false)
                    }
                } else if (_reciever.x < yards_to_x(CurrentFirstDownLineYardage)) {
                    console.log("First down")
                    CurrentDown = 1
                    CurrentScrimYardage = x_to_yards(_reciever.x)
                    CurrentFirstDownLineYardage = CurrentScrimYardage - 10
                    CurrentDownYardage = 10
                } else if (_reciever.x > yards_to_x(CurrentFirstDownLineYardage) && _reciever.x < yards_to_x(CurrentScrimYardage)) {
                    console.log("Between the lines")
                    if (CurrentDown < 4) {
                        CurrentDown += 1
                        CurrentScrimYardage = x_to_yards(_reciever.x)
                        CurrentDownYardage = CurrentScrimYardage - CurrentFirstDownLineYardage
                    } else {
                        end_possession(false)
                    }
                }
                modes.setMode("preSnap", yards_to_x(CurrentScrimYardage))
            } else {
                console.log("Quarterback sacked")
                if (CurrentDown < 4) {
                    CurrentDown += 1
                    CurrentScrimYardage = x_to_yards(_qb.x)
                    CurrentDownYardage = CurrentScrimYardage - CurrentFirstDownLineYardage
                } else {
                    end_possession(false)
                }
                modes.setMode("preSnap", yards_to_x(CurrentScrimYardage))
            }
        }
        endingplay = false
    }
}
function generate_DLine () {
    playerInt = 0
    // Spawn D-Lineman
    for (let index2 = 0; index2 <= 4; index2++) {
        if (index2 == 2) {
            linebacker = sprites.create(assets.image`myImage11`, SpriteKind.Defense)
            linebacker.setPosition(_qb.x - 40, 60 - 18 + 6 * (index2 + 1))
            sprites.setDataNumber(linebacker, "num", playerInt)
        } else {
            defensive_tackle_end = sprites.create(assets.image`myImage1`, SpriteKind.Defense)
            defensive_tackle_end.setPosition(_qb.x - 18, 60 - 18 + 6 * (index2 + 1))
            sprites.setDataNumber(defensive_tackle_end, "num", playerInt)
        }
        playerInt += 1
    }
    // Spawn corners
    cb1 = sprites.create(assets.image`myImage11`, SpriteKind.Defense)
    cb1.setPosition(wr1.x - 12, 17)
    sprites.setDataNumber(cb1, "num", playerInt)
    playerInt += 1
    cb2 = sprites.create(assets.image`myImage11`, SpriteKind.Defense)
    cb2.setPosition(wr2.x - 12, 100)
    sprites.setDataNumber(cb2, "num", playerInt)
    playerInt += 1
    olb1 = sprites.create(assets.image`myImage11`, SpriteKind.Defense)
    olb1.setPosition(_qb.x - 32, 40)
    sprites.setDataNumber(olb1, "num", playerInt)
    playerInt += 1
    olb2 = sprites.create(assets.image`myImage11`, SpriteKind.Defense)
    olb2.setPosition(_qb.x - 32, 80)
    sprites.setDataNumber(olb2, "num", playerInt)
    playerInt += 1
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (modes.getCurrentMode() == "onPlay") {
        if (_reciever == spriteutils.nullConsts(spriteutils.NullConsts.Null)) {
            if (!(recieverHasPossesion)) {
                console.log("Qb will go for pass")
                music.play(music.createSoundEffect(WaveShape.Noise, 701, 1, 71, 255, 50, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
                throw_ball_fromto(_qb, wr1)
                timer.background(function () {
                    pauseUntil(() => enableRecieverMovement)
                    console.log("Pass completed")
                    music.play(music.createSoundEffect(WaveShape.Sawtooth, 1, 239, 186, 255, 10, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                    animation.runImageAnimation(
                    _reciever,
                    assets.animation`myAnim`,
                    200,
                    true
                    )
                })
            } else {
                console.log("reciever HAS possesion")
            }
        } else {
            console.log("_reciever exists!")
        }
        _reciever.vx = sprites.readDataNumber(_reciever, "velocity") + 80
        if (enableRecieverMovement) {
            for (let index = 0; index < 5; index++) {
                _reciever.y += -1
                pause(10)
            }
        }
        _reciever.vx = sprites.readDataNumber(_reciever, "velocity")
    } else {
        console.log("WTF?")
    }
})
modes.whenModeChanged("sack", function (value) {
    timer.after(2600, function () {
        sprites.destroy(value)
        endPlay(false)
    })
})
function end_possession (kickoff_return: boolean) {
    modes.addMode("defense")
    modes.setMode("defense", kickoff_return)
    console.log("End of possession")
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.Defense)
    sprites.destroyAllSpritesOfKind(SpriteKind.PlayerWithPossession)
    sprites.destroyAllSpritesOfKind(SpriteKind.Indicator)
    sprites.destroyAllSpritesOfKind(SpriteKind.PlayerPopup)
    sprites.destroyAllSpritesOfKind(SpriteKind.PlayerInEndzone)
    sprites.destroyAllSpritesOfKind(SpriteKind.Ball)
    sprites.destroy(_reciever)
    _field.setImage(assets.image`gridiron`)
    playLog = []
    if (CurrentTeam == CurrentHomeTeam) {
        opponentTeam = CurrentAwayTeam
    } else {
        opponentTeam = CurrentHomeTeam
    }
    if (kickoff_return) {
        simulatePossession(25)
    } else {
        simulatePossession(CurrentScrimYardage)
    }
    console.log(playLog)
    for (let value8 of playLog) {
        if (value8.includes("-")) {
            randomElapse = Math.randomRange(5, 10)
            timer.background(function () {
                for (let index = 0; index < randomElapse; index++) {
                    gameClock += -1
                    pause(50)
                }
            })
            cutsceneYardage = parseInt(value8.split(" - ")[0])
            mainDefenseSplash = value8.split(" - ")[1]
            console.log(mainDefenseSplash)
            set_splash_to(mainDefenseSplash, false, yards_to_x(cutsceneYardage))
        } else {
            set_splash_to(value8, false, yards_to_x(cutsceneYardage))
        }
        pauseUntil(() => controller.anyButton.isPressed())
    }
    for (let value6 of playLog) {
        if (value6.includes("TOUCHDOWN")) {
            if (CurrentTeam == CurrentHomeTeam) {
                AwayScore += 6
            } else {
                HomeScore += 6
            }
        }
    }
    timer.background(function () {
        pauseUntil(() => modes.getCurrentMode() == "preSnap")
        if (playLog[playLog.length - 1].includes("TOUCHDOWN") || playLog[playLog.length - 1].includes("punt")) {
            CurrentDown = 1
            CurrentScrimYardage = 75.25
            CurrentFirstDownLineYardage = CurrentScrimYardage - 10
            CurrentDownYardage = CurrentScrimYardage - CurrentFirstDownLineYardage
            modes.setMode("preSnap", yards_to_x(CurrentScrimYardage))
        } else {
            CurrentDown = 1
            CurrentScrimYardage = cutsceneYardage
            CurrentFirstDownLineYardage = CurrentScrimYardage - 10
            CurrentDownYardage = CurrentScrimYardage - CurrentFirstDownLineYardage
            modes.setMode("preSnap", yards_to_x(CurrentScrimYardage))
        }
    })
}
sprites.onOverlap(SpriteKind.Ball, SpriteKind.Defense, function (sprite, otherSprite) {
    if (Math.abs(spriteutils.distanceBetween(sprite, ballShadow)) < 4) {
        if (Math.abs(spriteutils.distanceBetween(otherSprite, _qb)) > 20) {
            if (!(recieverHasPossesion)) {
                if (!(enableRecieverMovement)) {
                    if (!(intercepted)) {
                        if (modes.getCurrentMode() == "onPlay") {
                            inGameAlert("INTERCEPTION!")
                            timer.after(2500, function () {
                                fancyText.setText(ContextText, "")
                            })
                            intercepted = true
                            animation.runImageAnimation(
                            otherSprite,
                            assets.animation`myAnim2`,
                            200,
                            true
                            )
                            otherSprite.follow(null)
                            otherSprite.setVelocity(20, 0)
                            otherSprite.setKind(SpriteKind.Interceptor)
                            sprite.setFlag(SpriteFlag.Invisible, true)
                            ballShadow.setFlag(SpriteFlag.Invisible, true)
                            for (let value62 of sprites.allOfKind(SpriteKind.Player)) {
                                value62.follow(otherSprite, 20)
                            }
                            spriteutils.onSpriteUpdateInterval(_ball, 20, function (sprite) {
                                CameraX = otherSprite.x
                            })
                        }
                    }
                }
            }
        }
    }
})
function throw_ball_fromto (passer: Sprite, reciever: Sprite) {
    _reciever = reciever
    reciever.setKind(SpriteKind.PlayerThatCaught)
    _ball = sprites.create(img`
        e 1 e 
        c c c 
        `, SpriteKind.Ball)
    ballShadow = sprites.create(img`
        c . c 
        . c . 
        `, SpriteKind.Misc)
    animation.runImageAnimation(
    _ball,
    [img`
        e 1 e 
        c c c 
        `,img`
        e e e 
        c 1 c 
        `],
    75,
    true
    )
    _ball.setPosition(passer.x, passer.y)
    ballShadow.setPosition(passer.x, passer.y)
    ballShadow.z = -48
    sprites.destroyAllSpritesOfKind(SpriteKind.Indicator)
    spriteutils.onSpriteUpdateInterval(_ball, 20, function (sprite) {
        spriteutils.setVelocityAtAngle(sprite, spriteutils.angleFrom(sprite, _reciever) + 0.4, Math.min(100, 90 + Math.max(0, spriteutils.distanceBetween(sprite, _reciever)) / 100 * 10))
        spriteutils.setVelocityAtAngle(ballShadow, spriteutils.angleFrom(ballShadow, _reciever), Math.min(100, 90 + Math.max(0, spriteutils.distanceBetween(ballShadow, _reciever)) / 100 * 10))
        if (_reciever) {
            if (sprite.overlapsWith(_reciever)) {
                if (!(intercepted)) {
                    if (spriteutils.getSpritesWithin(SpriteKind.Defense, 4, _reciever).length == 0) {
                        CameraX = _reciever.x
                        sprite.setFlag(SpriteFlag.Invisible, true)
                        ballShadow.setFlag(SpriteFlag.Invisible, true)
                        _reciever.setVelocity(sprites.readDataNumber(_reciever, "velocity"), 0)
                        recieverHasPossesion = true
                        if (_reciever.kind() == SpriteKind.PlayerThatCaught) {
                            enableRecieverMovement = true
                            playerPopUp("Caught!", _reciever)
                        }
                        _reciever.setKind(SpriteKind.PlayerWithPossession)
                        for (let value10 of sprites.allOfKind(SpriteKind.Defense)) {
                            value10.follow(_reciever, spriteutils.speed(_reciever) / 1.1)
                        }
                        for (let value11 of sprites.allOfKind(SpriteKind.Player)) {
                            value11.follow(_reciever, spriteutils.speed(_reciever) / 1.3)
                        }
                        return
                    }
                }
            } else {
                if (!(intercepted)) {
                    CameraX = _ball.x
                    return
                }
            }
        }
    })
}
function subtractTime (minutes: number, seconds: number, subtractSeconds: number) {
    totalSeconds = minutes * 60 + seconds - subtractSeconds
    if (totalSeconds < 0) {
        totalSeconds = 0
    }
    return [Math.floor(totalSeconds / 60), totalSeconds % 60]
}
function playerPopUp (text: string, sprite: Sprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.PlayerPopup)
    popup = fancyText.create(text, 0, 15, fancyText.smallArcade)
    popup.setKind(SpriteKind.PlayerPopup)
    timer.background(function () {
        for (let index32 = 0; index32 <= 15; index32++) {
            popup.setPosition(sprite.x, sprite.y - index32)
            pause(50)
        }
        for (let index42 = 0; index42 <= 15; index42++) {
            fancyText.setText(popup, fancyText.getText(popup).substr(0, text.length - index42))
            pause(50)
        }
    })
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Endzone, function (sprite, otherSprite) {
    timer.background(function () {
        pauseUntil(() => sprite.x <= otherSprite.x - 192 + 16)
        animation.stopAnimation(animation.AnimationTypes.All, sprite)
        sprite.setImage(flip(assets.image`myImage10`))
    })
})
function flip (myImage: Image) {
    img2 = myImage
    myImage.flipX()
    return myImage
}
function set_splash_to (text: string, bool: boolean, cameraX: number) {
    pauseUntil(() => !(controller.anyButton.isPressed()))
    CameraX = cameraX
    gameSplash = fancyText.create(text)
    if (bool) {
        fancyText.setFont(gameSplash, fancyText.italic_small)
    } else {
        fancyText.setFont(gameSplash, fancyText.defaultArcade)
    }
    music.play(music.createSoundEffect(WaveShape.Square, 2000, 2000, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    fancyText.setFrame(gameSplash, assets.image`myImage13`)
    fancyText.setMaxWidth(gameSplash, 120)
    gameSplash.z = 1e+40
    gameSplash.setFlag(SpriteFlag.RelativeToCamera, true)
    gameSplash.setPosition(80, 60)
    pauseUntil(() => controller.anyButton.isPressed())
    sprites.destroy(gameSplash)
    return
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (modes.getCurrentMode() == "preSnap") {
        if (_qb) {
            modes.setMode("onPlay")
        }
    }
})
function x_to_yards (x: number) {
    return Math.floor((x + 79) * 0.31578947368)
}
function set_defensive_colors () {
    for (let value152 of sprites.allOfKind(SpriteKind.Defense)) {
        let mainColor = Teams.getTeamProperty(opponentTeam, Teams.TeamProperty.MainColor) as number
let secondaryColor = Teams.getTeamProperty(opponentTeam, Teams.TeamProperty.SecondaryColor) as number
let sockColor = Teams.getTeamProperty(opponentTeam, Teams.TeamProperty.SockColor) as number
if (typeof mainColor == "number") {
            if (Teams.containsColors(value152.image)) {
                value152.image.replace(9, mainColor)
                value152.image.replace(3, secondaryColor)
                value152.image.replace(7, sockColor)
            }
        }
    }
    for (let value1522 of sprites.allOfKind(SpriteKind.DefenderTackling)) {
        let mainColor2 = Teams.getTeamProperty(opponentTeam, Teams.TeamProperty.MainColor) as number
let secondaryColor2 = Teams.getTeamProperty(opponentTeam, Teams.TeamProperty.SecondaryColor) as number
let sockColor2 = Teams.getTeamProperty(opponentTeam, Teams.TeamProperty.SockColor) as number
if (typeof mainColor2 == "number") {
            if (Teams.containsColors(value1522.image)) {
                value1522.image.replace(9, mainColor2)
                value1522.image.replace(3, secondaryColor2)
                value1522.image.replace(7, sockColor2)
            }
        }
    }
    for (let value153 of sprites.allOfKind(SpriteKind.DefenderThatTackled)) {
        let mainColor3 = Teams.getTeamProperty(opponentTeam, Teams.TeamProperty.MainColor) as number
let secondaryColor3 = Teams.getTeamProperty(opponentTeam, Teams.TeamProperty.SecondaryColor) as number
let sockColor3 = Teams.getTeamProperty(opponentTeam, Teams.TeamProperty.SockColor) as number
if (typeof mainColor3 == "number") {
            if (Teams.containsColors(value153.image)) {
                value153.image.replace(9, mainColor3)
                value153.image.replace(3, secondaryColor3)
                value153.image.replace(7, sockColor3)
            }
        }
    }
    for (let value1532 of sprites.allOfKind(SpriteKind.Interceptor)) {
        let mainColor32 = Teams.getTeamProperty(opponentTeam, Teams.TeamProperty.MainColor) as number
let secondaryColor32 = Teams.getTeamProperty(opponentTeam, Teams.TeamProperty.SecondaryColor) as number
let sockColor32 = Teams.getTeamProperty(opponentTeam, Teams.TeamProperty.SockColor) as number
if (typeof mainColor32 == "number") {
            if (Teams.containsColors(value1532.image)) {
                value1532.image.replace(9, mainColor32)
                value1532.image.replace(3, secondaryColor32)
                value1532.image.replace(7, sockColor32)
            }
        }
    }
}
// Adjust this value to control the lerp speed
function lerpCameraX (targetX: number) {
    // Calculate the new camera X position based on lerpSpeed
    scene.centerCameraAt(scene.cameraProperty(CameraProperty.X) + (targetX - scene.cameraProperty(CameraProperty.X)) * lerpSpeed, 60)
}
// Helper function to generate random yardage within a range
function randomYardage (min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (modes.getCurrentMode() == "onPlay") {
        if (_reciever) {
            if (recieverHasPossesion) {
                if (enableRecieverMovement) {
                	
                }
            }
        } else {
            if (!(recieverHasPossesion)) {
                music.play(music.createSoundEffect(WaveShape.Noise, 701, 1, 71, 255, 50, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
                throw_ball_fromto(_qb, running_back)
                timer.background(function () {
                    pauseUntil(() => enableRecieverMovement)
                    music.play(music.createSoundEffect(WaveShape.Sawtooth, 1, 239, 186, 255, 10, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                    animation.runImageAnimation(
                    _reciever,
                    assets.animation`myAnim`,
                    200,
                    true
                    )
                })
            }
        }
    }
})
sprites.onOverlap(SpriteKind.PlayerWithPossession, SpriteKind.DefenderTackling, function (sprite, otherSprite) {
    timer.after(200, function () {
        if (sprite.overlapsWith(otherSprite)) {
            sprite.setKind(SpriteKind.Player)
            otherSprite.setKind(SpriteKind.DefenderThatTackled)
            _reciever = sprite
            recieverHasPossesion = false
            enableRecieverMovement = false
            animation.stopAnimation(animation.AnimationTypes.All, sprite)
            animation.runImageAnimation(
            sprite,
            assets.animation`dive1`,
            300,
            false
            )
            sprite.setVelocity(0, 0)
            sprites.setDataNumber(sprite, "velocity", 0)
            sprites.setDataNumber(sprite, "xvelocity", 0)
            playerPopUp("" + Math.floor(CurrentScrimYardage - x_to_yards(sprite.x)) + "y", sprite)
            timer.after(2600, function () {
                sprites.destroy(otherSprite)
                endPlay(false)
            })
        }
    })
})
function easeSpriteToTarget (sprite: Sprite, target: Sprite) {
    dx = target.x - sprite.x
    dy = target.y - sprite.y
    angle = Math.atan2(dy, dx)
    speed = 2
    easing = 3.14159265359 * ((sprite.x - target.x) / (2 * target.x))
    sprite.x += Math.cos(angle) * (speed * easing)
    sprite.y += Math.sin(angle) * (speed * easing)
}
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    if (modes.getCurrentMode() == "onPlay") {
        if (_reciever) {
            if (recieverHasPossesion) {
                if (enableRecieverMovement) {
                    _reciever.vx = sprites.readDataNumber(_reciever, "velocity")
                }
            }
        }
    }
})
// Simulate a single play
function simulatePlay () {
    // Skip if possession already ended
    if (possessionEnded) {
        return ""
    }
    const randomAction = Math.random();
if (willScore) {
        // Guaranteed to score
        if (!(passCompleted)) {
            yardage = randomYardage(30, 50)
            playLog.push("" + opponentYardage + " - It's a risky pass")
            addDramaticPause()
            playLog.push("The pass is caught!")
            opponentYardage += yardage
            passCompleted = true
            if (opponentYardage >= 100) {
                playLog.push("" + Teams.getTeamProperty(opponentTeam, Teams.TeamProperty.TeamAbbreviation) + " drives down the field...")
                playLog.push("100" + " - " + "TOUCHDOWN!")
                possessionEnded = true
                return "TOUCHDOWN!"
            }
            return "" + Teams.getTeamProperty(opponentTeam, Teams.TeamProperty.TeamAbbreviation) + " pass caught."
        } else {
            yardage2 = randomYardage(10, 40)
            playLog.push("" + opponentYardage + " - " + Teams.getTeamProperty(CurrentTeam, Teams.TeamProperty.TeamAbbreviation) + " surges forward!")
            addDramaticPause()
            playLog.push("" + Teams.getTeamProperty(opponentTeam, Teams.TeamProperty.TeamAbbreviation) + " misses the tackle!")
            opponentYardage += yardage2
            if (opponentYardage >= 100) {
                playLog.push("" + Teams.getTeamProperty(opponentTeam, Teams.TeamProperty.TeamAbbreviation) + " drives down the field...")
                playLog.push("100" + " - " + "TOUCHDOWN!")
                possessionEnded = true
                return "TOUCHDOWN!"
            }
            return "" + Teams.getTeamProperty(opponentTeam, Teams.TeamProperty.TeamAbbreviation) + " offense surges forward."
        }
    } else {
        if (!(passCompleted)) {
            if (randomAction < interceptionOdds) {
                playLog.push("" + opponentYardage + " - It's a short pass")
                addDramaticPause()
                playLog.push("It's intercepted!")
                possessionEnded = true
                return "Possession ended by interception."
            } else if (randomAction < interceptionOdds + fumbleOdds) {
                playLog.push("" + opponentYardage + " - It's a fumble!")
                addDramaticPause()
                playLog.push("" + Teams.getTeamProperty(opponentTeam, Teams.TeamProperty.TeamAbbreviation) + " recovers it!")
                possessionEnded = true
                return "Possession ended by fumble."
            } else {
                yardage3 = randomYardage(10, 20)
                playLog.push("" + opponentYardage + " - It's a short pass")
                addDramaticPause()
                playLog.push("The pass is caught!")
                opponentYardage += yardage3
                passCompleted = true
                return "[OFF] pass caught."
            }
        } else {
            if (randomAction < 0.5) {
                playLog.push("" + opponentYardage + " - " + Teams.getTeamProperty(opponentTeam, Teams.TeamProperty.TeamAbbreviation) + " goes for the tackle")
                addDramaticPause()
                playLog.push("A strong defensive stop!")
                possessionEnded = true
                return "" + Teams.getTeamProperty(CurrentTeam, Teams.TeamProperty.TeamAbbreviation) + " strong tackle."
            } else {
                playLog.push("" + opponentYardage + " - " + Teams.getTeamProperty(CurrentTeam, Teams.TeamProperty.TeamAbbreviation) + " go for it on 4th down")
                addDramaticPause()
                playLog.push("" + Teams.getTeamProperty(CurrentTeam, Teams.TeamProperty.TeamAbbreviation) + " turn it over.")
                possessionEnded = true
                return "Turnover on downs."
            }
        }
    }
}
function yards_to_x (yards: number) {
    return Math.ceil(yards / 0.31578947368 - 79)
}
function draw_lines_at (scrimmagex: number, firstdownx: number) {
    OriginalField = assets.image`gridiron`
    _field.setImage(OriginalField)
    _field.image.drawLine(scrimmagex + 79, 0, scrimmagex + 79, 99, 8)
    _field.image.drawLine(firstdownx + 79, 0, firstdownx + 79, 99, 5)
}
function start_game (awayTeam: number, homeTeam: number) {
    sprites.destroy(awayTeamTextSprite)
    sprites.destroy(homeTeamTextSprite)
    sprites.destroy(scheduleMenu)
    scene.setBackgroundColor(0)
    CurrentAwayTeam = awayTeam
    CurrentHomeTeam = homeTeam
    _field = sprites.create(assets.image`gridiron`, SpriteKind.Field)
    _endzones = sprites.create(assets.image`endzones`, SpriteKind.Endzone)
    _field.z = -50
    _endzones.z = -49
    Downs = fancyText.create("         ")
    Score = fancyText.create("" + Teams.getTeamProperty(CurrentAwayTeam, Teams.TeamProperty.TeamAbbreviation) + " " + AwayScore + "-" + HomeScore + " " + Teams.getTeamProperty(CurrentHomeTeam, Teams.TeamProperty.TeamAbbreviation))
    ContextText = fancyText.create("")
    time_qtr_background = sprites.create(assets.image`time`, SpriteKind.GUI)
    qtrText = fancyText.create("Q" + _quarter)
    qtrClock = fancyText.create(secondsToMs(gameClock))
    fancyText.setFont(qtrText, fancyText.smallArcade)
    fancyText.setFont(qtrClock, fancyText.smallArcade)
    fancyText.setFont(Downs, fancyText.smallArcade)
    qtrText.setPosition(10, 14)
    qtrClock.setPosition(37, 14)
    Downs.setPosition(129, 5)
    Score.setPosition(41, 5)
    ContextText.setPosition(7, 111)
    time_qtr_background.setPosition(27, 15)
    Downs.setFlag(SpriteFlag.RelativeToCamera, true)
    Score.setFlag(SpriteFlag.RelativeToCamera, true)
    ContextText.setFlag(SpriteFlag.RelativeToCamera, true)
    time_qtr_background.setFlag(SpriteFlag.RelativeToCamera, true)
    qtrClock.setFlag(SpriteFlag.RelativeToCamera, true)
    qtrText.setFlag(SpriteFlag.RelativeToCamera, true)
    CurrentScrimYardage = 75.25
    CurrentFirstDownLineYardage = CurrentScrimYardage - 30
    CurrentDownYardage = CurrentScrimYardage - CurrentFirstDownLineYardage
    CurrentDown = 3
    timer.background(function () {
        while (!(onField)) {
            lerpCameraX(CameraX)
            pause(10)
        }
    })
    enableRecieverMovement = false
    recieverHasPossesion = false
    if (CurrentTeam == CurrentHomeTeam) {
        opponentTeam = CurrentAwayTeam
    } else {
        opponentTeam = CurrentHomeTeam
    }
    set_splash_to("" + Teams.getTeamProperty(CurrentAwayTeam, Teams.TeamProperty.TeamLocation) + " vs\\n " + Teams.getTeamProperty(CurrentHomeTeam, Teams.TeamProperty.TeamLocation), true, yards_to_x(50))
    music.play(music.createSoundEffect(WaveShape.Sawtooth, 1, 556, 400, 400, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    set_splash_to("" + Teams.getTeamProperty(CurrentTeam, Teams.TeamProperty.TeamLocation) + " returns...", false, 190)
    set_splash_to("to the 25 yard line.", false, 140)
    onField = true
    modes.setMode("preSnap", yards_to_x(CurrentScrimYardage))
    intercepted = false
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (modes.getCurrentMode() == "onPlay") {
        if (_reciever) {
            if (recieverHasPossesion) {
                if (enableRecieverMovement) {
                    sprites.setDataNumber(_reciever, "velocity", _reciever.vx)
                    _reciever.vx = 0
                }
            }
        } else {
            if (!(recieverHasPossesion)) {
                music.play(music.createSoundEffect(WaveShape.Noise, 701, 1, 71, 255, 50, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
                throw_ball_fromto(_qb, tight_end)
                timer.background(function () {
                    pauseUntil(() => enableRecieverMovement)
                    music.play(music.createSoundEffect(WaveShape.Sawtooth, 1, 239, 186, 255, 10, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                    animation.runImageAnimation(
                    _reciever,
                    assets.animation`myAnim`,
                    200,
                    true
                    )
                })
            }
        }
    }
})
modes.whenModeChanged("onPlay", function (value) {
    fancyText.setText(ContextText, "")
    soundfx.hut()
    music.play(music.createSoundEffect(WaveShape.Noise, 1, 386, 71, 255, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    sprites.destroy(playFormationLines)
    if (_qb) {
        _qb.sayText("HUT!", 1000, false)
        _qb.setImage(assets.image`myImage0`)
        spriteutils.moveTo(_qb, spriteutils.pos(_qb.x + 7, _qb.y), 375)
        wr1.setVelocity(-20, 0)
        wr2.setVelocity(-24, 0)
        running_back.setVelocity(-19, 0)
        tight_end.setVelocity(-19, 0)
        sprites.setDataNumber(wr1, "velocity", wr1.vx)
        sprites.setDataNumber(wr2, "velocity", wr2.vx)
        sprites.setDataNumber(running_back, "velocity", running_back.vx)
        sprites.setDataNumber(tight_end, "velocity", tight_end.vx)
        call_play(_play)
        upInd = sprites.create(assets.image`myImage6`, SpriteKind.Indicator)
        upInd.follow(wr1, 99)
        upInd.setPosition(wr1.x, wr1.y)
        sprites.setDataSprite(wr1, "ind", upInd)
        downInd = sprites.create(assets.image`myImage7`, SpriteKind.Indicator)
        downInd.follow(wr2, 99)
        downInd.setPosition(wr2.x, wr2.y)
        sprites.setDataSprite(wr2, "ind", downInd)
        leftInd = sprites.create(assets.image`myImage4`, SpriteKind.Indicator)
        leftInd.follow(running_back, 99)
        leftInd.setPosition(running_back.x, running_back.y)
        sprites.setDataSprite(running_back, "ind", leftInd)
        rightInd = sprites.create(assets.image`myImage5`, SpriteKind.Indicator)
        rightInd.follow(tight_end, 99)
        rightInd.setPosition(tight_end.x, tight_end.y)
        sprites.setDataSprite(tight_end, "ind", rightInd)
        animation.runImageAnimation(
        wr1,
        assets.animation`myAnim0`,
        200,
        true
        )
        animation.runImageAnimation(
        wr2,
        assets.animation`myAnim0`,
        200,
        true
        )
        animation.runImageAnimation(
        cb1,
        assets.animation`myAnim4`,
        200,
        true
        )
        animation.runImageAnimation(
        cb2,
        assets.animation`myAnim4`,
        200,
        true
        )
        for (let sprite of sprites.allOfKind(SpriteKind.Defense)) {
            for (let value9 of sprites.allOfKind(SpriteKind.Player)) {
                if (sprites.readDataNumber(value9, "num") == sprites.readDataNumber(sprite, "num")) {
                    if (sprites.readDataNumber(sprite, "num") <= 4) {
                        animation.runImageAnimation(
                        sprite,
                        assets.animation`myAnim3`,
                        200,
                        true
                        )
                        sackSpeed = 1 + (Teams.getTeamProperty(CurrentTeam, Teams.TeamProperty.Rating) as number - 1) * 1.5 / 4
                        sprite.follow(_qb, 10 / randint(sackSpeed, sackSpeed + 0.5))
                        value9.follow(sprite, 10 / 1.1)
                    } else {
                        sprite.follow(value9, spriteutils.speed(value9) / 1.1)
                        if (value9 == running_back) {
                            sprite.follow(value9, spriteutils.speed(value9) / 2)
                            timer.after(2750, function () {
                                sprite.follow(value9, spriteutils.speed(value9) / 1.1)
                            })
                        }
                    }
                }
            }
        }
        timer.background(function () {
            while (modes.getCurrentMode() == "onPlay") {
                if (_reciever) {
                    if (!(_reciever.overlapsWith(_endzones))) {
                        gameClock += -1
                    }
                    pause(1000)
                } else {
                    gameClock += -1
                    pause(1000)
                }
            }
        })
    }
})
function secondsToMs (seconds: number) {
    if (seconds >= 0) {
        minutes = Math.floor(seconds / 60)
        remainingSeconds = seconds % 60
        return "" + minutes + ":" + (remainingSeconds < 10 ? "0" : "") + remainingSeconds
    } else {
        return "0:00"
    }
}
function call_play (playNumber: number) {
    if (playNumber == 0) {
        run_route([[0, 1.2], [1550, 0]], running_back)
        run_route([[0, 0], [1925, -0.5]], wr1)
        run_route([[0, -1], [1250, 0]], tight_end)
    } else if (playNumber == 2) {
        run_route([[0, 0], [2450, -1.6]], wr1)
        run_route([[0, 0], [1925, 0.6]], wr2)
        run_route([[0, -0.6], [650, 0]], running_back)
        run_route([[300, 99]], tight_end)
    }
}
function inGameAlert (text: string) {
    fancyText.setText(ContextText, text)
    sprites.destroyAllSpritesOfKind(SpriteKind.alertGlare)
    alertTextGlare = sprites.create(assets.image`myImage16`, SpriteKind.alertGlare)
    alertTextGlare.setPosition(81, 115)
    alertTextGlare.setFlag(SpriteFlag.RelativeToCamera, true)
    alertTextGlare.z = alertTextGlare.z + 1
    music.play(music.createSoundEffect(WaveShape.Square, 356, 1, 200, 0, 50, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
    music.play(music.createSoundEffect(WaveShape.Square, 1109, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
    calculatedTextPixelLength = 0
    for (let index5 = 0; index5 <= text.length; index5++) {
        if (text.charAt(index5) != " ") {
            calculatedTextPixelLength += 6
        } else {
            calculatedTextPixelLength += 9
        }
    }
    spriteutils.moveTo(alertTextGlare, spriteutils.pos(80 + calculatedTextPixelLength, 115), 500)
    timer.after(500, function () {
        sprites.destroy(alertTextGlare)
    })
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (modes.getCurrentMode() == "onPlay") {
        if (_reciever == spriteutils.nullConsts(spriteutils.NullConsts.Null)) {
            if (!(recieverHasPossesion)) {
                music.play(music.createSoundEffect(WaveShape.Noise, 701, 1, 71, 255, 50, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
                throw_ball_fromto(_qb, wr2)
                timer.background(function () {
                    pauseUntil(() => enableRecieverMovement)
                    music.play(music.createSoundEffect(WaveShape.Sawtooth, 1, 239, 186, 255, 10, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                    animation.runImageAnimation(
                    _reciever,
                    assets.animation`myAnim`,
                    200,
                    true
                    )
                })
            }
        }
        if (enableRecieverMovement) {
            _reciever.vx = sprites.readDataNumber(_reciever, "velocity") + 80
            for (let index = 0; index < 5; index++) {
                _reciever.y += 1
                pause(10)
            }
            _reciever.vx = sprites.readDataNumber(_reciever, "velocity")
        }
    }
})
function set_offensive_colors () {
    for (let value22 of sprites.allOfKind(SpriteKind.Player)) {
        let mainColor22 = Teams.getTeamProperty(CurrentTeam, Teams.TeamProperty.MainColor) as number
let secondaryColor22 = Teams.getTeamProperty(CurrentTeam, Teams.TeamProperty.SecondaryColor) as number
let sockColor22 = Teams.getTeamProperty(CurrentTeam, Teams.TeamProperty.SockColor) as number
if (typeof mainColor22 == "number") {
            if (Teams.containsColors(value22.image)) {
                value22.image.replace(9, mainColor22)
                value22.image.replace(3, secondaryColor22)
                value22.image.replace(7, sockColor22)
            }
        }
    }
    for (let value222 of sprites.allOfKind(SpriteKind.PlayerWithPossession)) {
        let mainColor23 = Teams.getTeamProperty(CurrentTeam, Teams.TeamProperty.MainColor) as number
let secondaryColor23 = Teams.getTeamProperty(CurrentTeam, Teams.TeamProperty.SecondaryColor) as number
let sockColor23 = Teams.getTeamProperty(CurrentTeam, Teams.TeamProperty.SockColor) as number
if (typeof mainColor23 == "number") {
            if (Teams.containsColors(value222.image)) {
                value222.image.replace(9, mainColor23)
                value222.image.replace(3, secondaryColor23)
                value222.image.replace(7, sockColor23)
            }
        }
    }
    for (let value223 of sprites.allOfKind(SpriteKind.PlayerInEndzone)) {
        let mainColor24 = Teams.getTeamProperty(CurrentTeam, Teams.TeamProperty.MainColor) as number
let secondaryColor24 = Teams.getTeamProperty(CurrentTeam, Teams.TeamProperty.SecondaryColor) as number
let sockColor24 = Teams.getTeamProperty(CurrentTeam, Teams.TeamProperty.SockColor) as number
if (typeof mainColor24 == "number") {
            if (Teams.containsColors(value223.image)) {
                value223.image.replace(9, mainColor24)
                value223.image.replace(3, secondaryColor24)
                value223.image.replace(7, sockColor24)
            }
        }
    }
    for (let value224 of sprites.allOfKind(SpriteKind.NonPlayerPlayers)) {
        let mainColor25 = Teams.getTeamProperty(CurrentTeam, Teams.TeamProperty.MainColor) as number
let secondaryColor25 = Teams.getTeamProperty(CurrentTeam, Teams.TeamProperty.SecondaryColor) as number
let sockColor25 = Teams.getTeamProperty(CurrentTeam, Teams.TeamProperty.SockColor) as number
if (typeof mainColor25 == "number") {
            if (Teams.containsColors(value224.image)) {
                value224.image.replace(9, mainColor25)
                value224.image.replace(3, secondaryColor25)
                value224.image.replace(7, sockColor25)
            }
        }
    }
}
modes.whenModeChanged("defense", function (value) {
	
})
spriteutils.onSpriteKindUpdateInterval(SpriteKind.Defense, 100, function (sprite) {
    if (modes.getCurrentMode() == "onPlay") {
        if (!(intercepted)) {
            if (spriteutils.distanceBetween(_reciever, sprite) <= 9) {
                if (recieverHasPossesion) {
                    sprite.setKind(SpriteKind.DefenderTackling)
                    animation.runImageAnimation(
                    sprite,
                    assets.animation`dive0`,
                    100,
                    false
                    )
                    timer.after(400, function () {
                        sprite.follow(_reciever, 0)
                        sprite.setVelocity(0, 0)
                    })
                }
            }
            if (spriteutils.distanceBetween(_qb, sprite) <= 5) {
                if (!(recieverHasPossesion)) {
                    sprite.setKind(SpriteKind.DefenderTackling)
                    animation.runImageAnimation(
                    sprite,
                    assets.animation`dive2`,
                    100,
                    false
                    )
                    timer.after(400, function () {
                        sprite.follow(_reciever, 0)
                        sprite.setVelocity(0, 0)
                    })
                }
            }
        }
    }
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    playNames = ["Vertical Stretch", "Four Verticals", "Cross Mesh"]
    if (modes.getCurrentMode() == "preSnap") {
        if (playFormationLines) {
            if (_play != playFormationImagesArray.length - 1) {
                _play += 1
            } else {
                _play = 0
            }
            playFormationLines.setImage(playFormationImagesArray[_play])
        }
        inGameAlert(playNames[_play])
    }
})
sprites.onOverlap(SpriteKind.Interceptor, SpriteKind.Player, function (sprite, otherSprite) {
    recieverHasPossesion = false
    enableRecieverMovement = false
    sprite.setKind(SpriteKind.DefenderThatTackled)
    animation.stopAnimation(animation.AnimationTypes.All, sprite)
    animation.runImageAnimation(
    sprite,
    assets.animation`dive1`,
    300,
    false
    )
    animation.runImageAnimation(
    otherSprite,
    assets.animation`dive2`,
    100,
    false
    )
    sprite.setVelocity(0, 0)
    sprites.setDataNumber(sprite, "velocity", 0)
    sprites.setDataNumber(sprite, "xvelocity", 0)
    for (let value7 of sprites.allOfKind(SpriteKind.Player)) {
        value7.follow(null)
    }
    for (let value12 of sprites.allOfKind(SpriteKind.Defense)) {
        value12.follow(null)
    }
    otherSprite.follow(sprite, 55)
    timer.after(2500, function () {
        sprites.destroy(sprite)
        sprites.destroy(otherSprite)
        end_possession(false)
        modes.setMode("preSnap", yards_to_x(CurrentScrimYardage))
    })
})
function generate_OL () {
    playerInt = 0
    _qb = sprites.create(assets.image`myImage3`, SpriteKind.Player)
    _qb.setPosition(yards_to_x(CurrentScrimYardage) + 13, 60)
    for (let index7 = 0; index7 <= 4; index7++) {
        if (index7 == 2) {
            center = sprites.create(flip(assets.image`myImage2`), SpriteKind.Player)
            center.setPosition(_qb.x - 10, 60 - 18 + 6 * (index7 + 1))
            sprites.setDataNumber(center, "num", playerInt)
        } else {
            safety = sprites.create(flip(assets.image`myImage2`), SpriteKind.Player)
            safety.setPosition(_qb.x - 8, 60 - 18 + 6 * (index7 + 1))
            sprites.setDataNumber(safety, "num", playerInt)
        }
        playerInt += 1
    }
    wr1 = sprites.create(assets.image`myImage3`, SpriteKind.Player)
    wr1.setPosition(_qb.x - 2, 27)
    sprites.setDataNumber(wr1, "num", playerInt)
    playerInt += 1
    wr2 = sprites.create(assets.image`myImage3`, SpriteKind.Player)
    wr2.setPosition(_qb.x - 2, 90)
    sprites.setDataNumber(wr2, "num", playerInt)
    sprites.setDataNumber(wr1, "xvelocity", -20)
    sprites.setDataNumber(wr2, "xvelocity", -24)
    playerInt += 1
    running_back = sprites.create(assets.image`myImage3`, SpriteKind.Player)
    running_back.setPosition(_qb.x + 20, _qb.y)
    sprites.setDataNumber(running_back, "num", playerInt)
    playerInt += 1
    tight_end = sprites.create(assets.image`myImage3`, SpriteKind.Player)
    tight_end.setPosition(_qb.x - 8, 80)
    sprites.setDataNumber(tight_end, "num", playerInt)
    playerInt += 1
}
function run_route (directions: number[][], offensive_player: Sprite) {
    timer.background(function () {
        for (let value72 of directions) {
            pause(value72[0])
            if (value72[1] != 99) {
                spriteutils.setVelocityAtAngle(offensive_player, value72[1], sprites.readDataNumber(offensive_player, "velocity"))
            } else {
                offensive_player.setVelocity(0, 0)
            }
        }
    })
}
sprites.onOverlap(SpriteKind.PlayerWithPossession, SpriteKind.Endzone, function (sprite, otherSprite) {
    sprites.destroy(_ball)
    _reciever = sprite
    sprite.setKind(SpriteKind.NonPlayerPlayers)
    otherSprite.setKind(SpriteKind.NonPlayerPlayers)
    if (CurrentTeam == CurrentAwayTeam) {
        AwayScore += 6
    } else {
        HomeScore += 6
    }
    enableRecieverMovement = false
    endPlay(true)
    timer.after(3000, function () {
        end_possession(true)
        modes.setMode("preSnap", yards_to_x(CurrentScrimYardage))
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.DefenderTackling, function (sprite, otherSprite) {
    if (modes.getCurrentMode() == "onPlay") {
        if (sprite == _qb) {
            if (!(recieverHasPossesion)) {
                if (!(_reciever)) {
                    inGameAlert("SACKED!")
                    _reciever = sprite
                    sprite.setKind(SpriteKind.SackedQB)
                    CameraX = sprite.x
                    sprites.destroyAllSpritesOfKind(SpriteKind.Indicator)
                    otherSprite.setKind(SpriteKind.DefenderThatTackled)
                    animation.stopAnimation(animation.AnimationTypes.All, sprite)
                    animation.runImageAnimation(
                    sprite,
                    assets.animation`dive1`,
                    300,
                    false
                    )
                    sprite.setVelocity(0, 0)
                    sprites.setDataNumber(sprite, "velocity", 0)
                    sprites.setDataNumber(sprite, "xvelocity", 0)
                    playerPopUp("" + Math.floor(CurrentScrimYardage - x_to_yards(sprite.x)) + "y", sprite)
                    if (!(recieverHasPossesion)) {
                        modes.addMode("sack")
                        modes.setMode("sack", otherSprite)
                    }
                }
            }
        }
    }
})
modes.whenModeChanged("quarterEnd", function (offense) {
    timer.background(function () {
        sprites.destroyAllSpritesOfKind(SpriteKind.Player)
        sprites.destroyAllSpritesOfKind(SpriteKind.Defense)
        sprites.destroyAllSpritesOfKind(SpriteKind.Indicator)
        sprites.destroyAllSpritesOfKind(SpriteKind.PlayerWithPossession)
        sprites.destroyAllSpritesOfKind(SpriteKind.DefenderThatTackled)
        sprites.destroyAllSpritesOfKind(SpriteKind.DefenderTackling)
        sprites.destroyAllSpritesOfKind(SpriteKind.PlayerPopup)
        sprites.destroyAllSpritesOfKind(SpriteKind.SackedQB)
        fancyText.setText(ContextText, "")
        if (offense) {
            set_splash_to("End of " + [
            "1st",
            "2nd",
            "3rd",
            "4th"
            ][_quarter - 1] + " Quarter", false, CameraX)
            gameClock = 90
            _quarter += 1
            modes.setMode("preSnap", yards_to_x(CurrentScrimYardage))
        } else {
            sprites.destroy(gameSplash)
        }
    })
})
function simulatePossession (sY: number) {
    possessionEnded = false
    passCompleted = false
    successfulPlays = 0
    startingYardage = sY
    opponentYardage = sY
    willScore = Math.percentChance(35 + 0.5 * sY)
    playLog.push("" + sY + " - " + ("" + Teams.getTeamProperty(opponentTeam, Teams.TeamProperty.TeamAbbreviation) + " get the ball"))
    console.log("" + sY + " - " + ("" + Teams.getTeamProperty(opponentTeam, Teams.TeamProperty.TeamAbbreviation) + " get the ball"))
    for (let index = 0; index < 3; index++) {
        if (possessionEnded) {
            break;
        }
        playResult = simulatePlay()
        if (playResult) {
            console.log(`${opponentYardage} - ${playResult}`)
        }
    }
    if (!(possessionEnded)) {
        if (opponentYardage >= 100) {
            playLog.push("100" + " - " + "TOUCHDOWN!")
            console.log("TOUCHDOWN!")
        } else if (opponentYardage - startingYardage < 10) {
            playLog.push(`${opponentYardage} - ${Teams.getTeamProperty(opponentTeam, Teams.TeamProperty.TeamAbbreviation)} fails to convert on 3rd down`)
            playLog.push("Possession ends with a punt.")
            console.log(`${opponentYardage} - ${Teams.getTeamProperty(opponentTeam, Teams.TeamProperty.TeamAbbreviation)} fails to convert on 3rd down`)
            console.log("Possession ends with a punt.")
        } else {
            playLog.push("TURNOVER ON DOWNS!")
            console.log("TURNOVER ON DOWNS!")
        }
    }
}
function addDramaticPause () {
    console.log("...")
    playLog.push("...")
}
let startingYardage = 0
let successfulPlays = 0
let safety: Sprite = null
let center: Sprite = null
let playNames: string[] = []
let calculatedTextPixelLength = 0
let alertTextGlare: Sprite = null
let minutes = 0
let sackSpeed = 0
let rightInd: Sprite = null
let leftInd: Sprite = null
let downInd: Sprite = null
let upInd: Sprite = null
let tight_end: Sprite = null
let onField = false
let qtrClock: fancyText.TextSprite = null
let qtrText: fancyText.TextSprite = null
let time_qtr_background: Sprite = null
let Score: fancyText.TextSprite = null
let OriginalField: Image = null
let yardage3 = 0
let yardage2 = 0
let yardage = 0
let passCompleted = false
let possessionEnded = false
let easing = 0
let speed = 0
let angle = 0
let dy = 0
let dx = 0
let gameSplash: fancyText.TextSprite = null
let img2: Image = null
let popup: fancyText.TextSprite = null
let totalSeconds = 0
let ballShadow: Sprite = null
let HomeScore = 0
let AwayScore = 0
let mainDefenseSplash = ""
let cutsceneYardage = 0
let randomElapse = 0
let playLog: string[] = []
let olb2: Sprite = null
let olb1: Sprite = null
let wr2: Sprite = null
let cb2: Sprite = null
let wr1: Sprite = null
let cb1: Sprite = null
let defensive_tackle_end: Sprite = null
let linebacker: Sprite = null
let playerInt = 0
let CurrentScrimYardage = 0
let _ball: Sprite = null
let ContextText: fancyText.TextSprite = null
let CurrentDownYardage = 0
let CurrentDown = 0
let Downs: fancyText.TextSprite = null
let enableRecieverMovement = false
let recieverHasPossesion = false
let intercepted = false
let _reciever: Sprite = null
let _field: Sprite = null
let _qb: Sprite = null
let running_back: Sprite = null
let playFormationLines: Sprite = null
let _endzones: Sprite = null
let CurrentFirstDownLineYardage = 0
let scheduleGameHomeScore = 0
let scheduleGameAwayScore = 0
let homeTeamTextSprite: TextSprite = null
let awayTeamTextSprite: TextSprite = null
let recordText: fancyText.TextSprite = null
let scheduleMenu: miniMenu.MenuSprite = null
let scheduleHomeTeam: Teams.TeamEnum = null
let awayOrHome = 0
let scheduleAwayTeam = 0
let star_ratings: Sprite = null
let teamselectSpritePlayer: Sprite = null
let TeamSelectName: TextSprite = null
let myMenu: miniMenu.MenuSprite = null
let scheduleMenuItems: miniMenu.MenuItem[] = []
let CameraX = 0
let lerpSpeed = 0
let playFormationImagesArray: Image[] = []
let _play = 0
let CurrentHomeTeam: Teams.TeamEnum = null
let CurrentAwayTeam: Teams.TeamEnum = null
let endingplay = false
let willScore = false
let fumbleOdds = 0
let interceptionOdds = 0
let gameClock = 0
let _quarter = 0
let remainingSeconds = 0
let totalSeconds2 = 0
let totalSeconds22 = 0
let newSeconds = 0
let newMinutes = 0
let elapsed = 0
let opponentYardage = 0
let playResult = ""
let CurrentTeam = 0
let opponentTeam: Teams.TeamEnum = null
let game_minutes = 0
let game_seconds = 0
let schedule: string[] = []
let value15 = null
let homeTeamEnum2: number = null
let awayTeamEnum2: number = null
_quarter = 1
gameClock = 90
opponentYardage = 25
interceptionOdds = 0.15
fumbleOdds = 0.15
willScore = Math.percentChance(50)
modes.addMode("preSnap")
modes.addMode("onPlay")
modes.addMode("quarterEnd")
endingplay = false
CurrentAwayTeam = Teams.getTeamFromEnum(Teams.TeamEnum.ARI)
CurrentHomeTeam = Teams.getTeamFromEnum(Teams.TeamEnum.LAR)
CurrentTeam = CurrentHomeTeam
_play = 0
playFormationImagesArray = [assets.image`play1`, img`
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ...5......................................................................................
    ..55......................................................................................
    .555555555555555555555555555555555555555555555555555555555555555555.......................
    5555555555555555555555555555555555555555555555555555555555555555555.......................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    .............................................................................8............
    ............................................................................88............
    ...........................................................................88888888888888.
    ..........................................................................888888888888888.
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ....................8.....................................................................
    ...................88.....................................................................
    ..................8888888888888888888888888888888888888888888888..........................
    .................88888888888888888888888888888888888888888888888..........................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ...5......................................................................................
    ..55......................................................................................
    .555555555555555555555555555555555555555555555555555555555555555555.......................
    5555555555555555555555555555555555555555555555555555555555555555555.......................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    `, img`
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    .................55555555555555555555555555555555555555555555555555.......................
    .................55555555555555555555555555555555555555555555555555.......................
    .................55.......................................................................
    .................55.......................................................................
    .................55.......................................................................
    .................55.......................................................................
    .................55.......................................................................
    .................55.......................................................................
    .................55.......................................................................
    .................55.......................................................................
    .................55.......................................................................
    .................55.......................................................................
    .................5555.....................................................................
    .................555......................................................................
    .................55.......................................................................
    .................5........................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ........................................................................................8.
    ........................................................................................8.
    .......................................................................................88.
    .......................................................................................88.
    ......................................................................................888.
    ......................................................................................888.
    .....................................................................................888..
    .....................................................................................888..
    ....................................................................................888...
    ....................................................................................888...
    ....................................8..............................................888....
    ...................................88..............................................888....
    ..................................888888888888888888888888888888888888888888888888888.....
    .................................8888888888888888888888888888888888888888888888888888.....
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ......5555................................................................................
    ......555.................................................................................
    ......5555................................................................................
    ......5.555...............................................................................
    .........555..............................................................................
    ..........555.......................................11....................................
    ...........555......................................11....................................
    ............555.....................................111111111111..........................
    .............555....................................111111111111..........................
    ..............555...................................11....................................
    ...............555..................................11....................................
    ................555.......................................................................
    .................555......................................................................
    ..................555.....................................................................
    ...................555....................................................................
    ....................555...................................................................
    .....................555..................................................................
    ......................555555555555555555555555555555555555555555555.......................
    .......................55555555555555555555555555555555555555555555.......................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    ..........................................................................................
    `]
lerpSpeed = 0.1
CameraX = 80
scene.setBackgroundColor(12)
blockSettings.remove("schedule")
blockSettings.remove("selectedTeam")
timer.background(function () {
    start_screen()
})
console.log("on start has been returned too")
game.onUpdate(function () {
    if (Score) {
        fancyText.setText(Score, "" + Teams.getTeamProperty(CurrentAwayTeam, Teams.TeamProperty.TeamAbbreviation) + " " + AwayScore + "-" + HomeScore + " " + Teams.getTeamProperty(CurrentHomeTeam, Teams.TeamProperty.TeamAbbreviation))
    }
    if (qtrClock) {
        fancyText.setText(qtrClock, secondsToMs(gameClock))
        if (gameClock < 60 && gameClock > 10) {
            fancyText.setColor(qtrClock, 5)
        } else if (gameClock < 11) {
            fancyText.setColor(qtrClock, 2)
        } else {
            fancyText.setColor(qtrClock, 1)
        }
    }
    if (qtrText) {
        fancyText.setText(qtrText, "Q" + _quarter)
    }
})
game.onUpdate(function () {
    if (!(onField)) {
        for (let value122 of sprites.allOfKind(SpriteKind.NonPlayerPlayers)) {
            value122.setFlag(SpriteFlag.Invisible, true)
        }
    } else {
        for (let value13 of sprites.allOfKind(SpriteKind.NonPlayerPlayers)) {
            value13.setFlag(SpriteFlag.Invisible, false)
        }
    }
})
game.onUpdate(function () {
    console.log("on game update running")
    lerpCameraX(CameraX)
})
game.onUpdate(function () {
	
})
game.onUpdateInterval(1, function () {
    set_offensive_colors()
    set_defensive_colors()
})
game.onUpdateInterval(1, function () {
	
})
forever(function () {
	
})
forever(function () {
	
})
