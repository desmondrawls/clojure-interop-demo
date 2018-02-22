package com.rap.battle

import bowling.BowlingController
import bowling.GameIdentifier
import bowling.GameSaver
import bowling.identifyGameUseCase
import com.rap.battle.correlation.generateCorrelationIDUseCase
import com.rap.battle.createComment.CommentCreator
import com.rap.battle.createQuestion.QuestionCreator
import com.rap.battle.createrapper.RapperCreator
import com.rap.battle.findComments.CommentsFinder
import com.rap.battle.findComments.findCommentsUseCase
import com.rap.battle.findQuestions.QuestionsFinder
import com.rap.battle.findQuestions.findQuestionsUseCase
import com.rap.battle.findneighborhoods.NeighborhoodsFinder
import com.rap.battle.findneighborhoods.findNeighborhoodsUseCase
import com.rap.battle.findrappers.RapperFinder
import com.rap.battle.findrappers.findRappersUseCase
import com.rap.battle.history.Archive
import com.rap.battle.history.fullHistoryUseCase
import com.rap.battle.identifyrapper.RapperIdentifier
import com.rap.battle.identifyrapper.identifyRapperUseCase
import com.rap.battle.localizerapper.RapperLocalizer
import com.rap.battle.tracking.InputTracker
import org.springframework.boot.SpringApplication
import org.springframework.boot.SpringBootConfiguration
import org.springframework.boot.autoconfigure.EnableAutoConfiguration
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.ComponentScan

@SpringBootConfiguration
@EnableAutoConfiguration
@ComponentScan(basePackages = arrayOf("bowling"))
open class BowlingApplication {

    @Bean
    open fun bowlingController(): BowlingController =
        BowlingController()
}

fun main(args: Array<String>) {
    SpringApplication.run(BowlingApplication::class.java, *args)
}
