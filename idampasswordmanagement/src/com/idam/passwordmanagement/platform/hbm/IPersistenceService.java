/**
 * 
 */
package com.idam.passwordmanagement.platform.hbm;

import java.util.List;
import java.util.Map;

import com.idam.passwordmanagement.model.user.MasterUser;

/**
 * @author gaurav.khullar
 *
 */
public interface IPersistenceService {
	/**
	 * This API is used to save the Object
	 * @param obj
	 * @return
	 */
	 public Object save(Object obj);
	 public void lock(Object object);
	 public void flush();
	 public void clear();
	 public void remove(Object obj);
	 public void remove(List objs);    
	 public void saveOrUpdate(final Object obj);
	 public void persist(Object obj);
	 public List<Object> selectAll(Class entityName);
	 public List executeQuery(String sql, Object[] params);
	 public void updateQuery(String sqlQuery);
	 public int updateQuery(String sql, Object[] params);
	 public int updateQuery(String sql, Map<String, Object> namedParams);
	 public int updateEntity(Class entityClassName,String uniquePropertyName, Object uniquePropertyValue,Map<String, Object> properties);
}
