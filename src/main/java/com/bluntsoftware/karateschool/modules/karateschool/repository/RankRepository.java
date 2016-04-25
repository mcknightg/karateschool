package com.bluntsoftware.karateschool.modules.karateschool.repository;

import com.bluntsoftware.karateschool.modules.karateschool.domain.Rank;
import com.genx.framework.jpa.repository.GenericRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.beans.factory.annotation.Qualifier;
/**
* Repository interface for table: Rank.
* @author autogenerated
*/

@Repository("karateschoolRankRepository")
@Qualifier("karateschool")
//@RepositoryRestResource(collectionResourceRel="karateschool.Rank", path="karateschool/Rank")
public interface RankRepository extends GenericRepository<Rank,Integer>  {

}