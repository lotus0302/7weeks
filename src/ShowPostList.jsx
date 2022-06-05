import {
    LoadingDiv,
    LoadingImg,
    PagenumberDiv,
    PagingSection,
    PostListDiv,
    PostSection,
    PostTitle,
    PostTitleDiv,
} from './styledComponent';
import {
    faArrowsRotate,
    faPenToSquare,
    faArrowLeft,
    faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EachPostLi from './EachPostLi';

function ShowPostList({isPost, loading, addPost, postList}) {
    return (
        <>
        <PostSection>
            <PostTitleDiv>
            <FontAwesomeIcon onClick ={addPost} icon = {faArrowsRotate} />
                <PostTitle>익명 게시판</PostTitle>
                <FontAwesomeIcon icon = {faPenToSquare} />
            </PostTitleDiv>
                            {loading ? (
                                <LoadingDiv>
                                    <LoadingImg src = {'./loading.svg'} />
                                </LoadingDiv>
                            ) : isPost?(
                                <LoadingDiv>
                                    아직 기록된 글이 없습니다.
                                </LoadingDiv>
                            ) : (
                                <ul>
                                    {postList.map((element) => (
                                        <EachPostLi
                                         key = {element.id} 
                                         title = {element.title} 
                                         replCount = {element.replCount}
                                         />
                                    ))}
                                </ul>
                            )} 
                            <PostListDiv>
                                
                            </PostListDiv>
                        </PostSection>
                        <PagingSection>
                        <PagenumberDiv>
                            <FontAwesomeIcon icon = {faArrowLeft} />
                        </PagenumberDiv>
                        <PagenumberDiv>2</PagenumberDiv>
                        <PagenumberDiv>
                            <FontAwesomeIcon icon = {faArrowRight} />
                        </PagenumberDiv>
                    </PagingSection>
                    </>
    )
}

export default ShowPostList