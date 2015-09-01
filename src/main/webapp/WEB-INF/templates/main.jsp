<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
 <meta charset="utf-8">
<title>Criminals Faces</title>
<%@ include file="/WEB-INF/pages/imports.jsp"%>
<%@ include file="/WEB-INF/pages/includeTags.jsp"%>
</head>
<body>
<div class="all-body">
	<tiles:insertAttribute name="header" />
	<section>
		<tiles:insertAttribute name="body" />
	</section>
	<footer>
		<tiles:insertAttribute name="footer" />
	</footer>
</div>	
</body>
</html>